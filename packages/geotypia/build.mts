/* eslint-disable @typescript-eslint/no-use-before-define,@typescript-eslint/no-unused-expressions */
import process from "node:process";
import path from "node:path";
import { $, argv, chalk, echo, fs } from "zx";

const TYPIA_SRC = "./src/typia-src";
const TYPIA_IMPORT = 'import typia from "typia";';
const BIG_FILE = false;
type FileTypeExports = {
  fspath: string;
  types: string[];
};
type GeotypesMetadata = {
  files: FileTypeExports[];
  geotypes: string[];
};

const DEBUG = argv.debug;
const HELP = argv.h || argv.help;

const COMMANDS = {
  help: "Show this message",
  clean: "Remove the dist directory",
  prebuild: "Create the necessary directories for the build",
  "typia-gen": "Generate typia files",
} as const;

function helpMsgString() {
  const maxCommandStrLen = Math.max(
    ...Object.keys(COMMANDS).map((c) => c.length),
  );
  const commandsHelpMsgBody = Object.entries(COMMANDS)
    .map(([command, desc]) => {
      const padding = " ".repeat(maxCommandStrLen - command.length);
      return `   ${command}${padding} - ${desc}`;
    })
    .join("\n");
  const lines = [
    "USAGE: 'tsx build.mts <command>'",
    "",
    "COMMANDS:",
    commandsHelpMsgBody,
    "",
    "OPTIONS:",
    "   -h, --help - Show this message",
    "   --debug    - Log a bunch of stuff to stderr",
  ];
  return lines.join("\n");
}

function echoHelp() {
  echo(helpMsgString());
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function errecho(...args: any[]) {
  echo(chalk.red("ERROR: ", ...args));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function debug(...args: any[]) {
  if (DEBUG) {
    echo(...args);
  }
}

const COMMANDS_FNS = {
  prebuild: preBuild,
  help: async () => {
    echoHelp();
  },
  clean: async () => {
    await $`rimraf dist`;
  },
  "typia-gen": async () => {
    // $`pnpm run typia-gen`;
    await $`npx typia generate --input src/typia-src --output src/generated --project tsconfig.json`;
  },
} satisfies {
  [K in keyof typeof COMMANDS]: () => Promise<void>;
};

function isCommand(command: string): command is keyof typeof COMMANDS {
  return command in COMMANDS;
}
function typeFunctionNames(tname: string) {
  return [
    `assert${tname}`,
    `equals${tname}`,
    `is${tname}`,
    `random${tname}`,
    `stringify${tname}`,
    `validate${tname}`,
  ];
}

function typeFunctions(tname: string) {
  return `
// ${tname}
export const assert${tname} = typia.createAssert<${tname}>();
export const equals${tname} = typia.createEquals<${tname}>();
export const is${tname} = typia.createIs<${tname}>();
export const random${tname} = typia.createRandom<${tname}>();
export const stringify${tname} = typia.json.createStringify<${tname}>();
export const validate${tname} = typia.createValidate<${tname}>();
`;
}

// PascalCase to kebab-case
function typename2filename(tname: string) {
  const filename = tname
    .replaceAll(/([a-z])([A-Z])/g, "$1-$2")
    .replaceAll(/\s+/g, "-")
    .toLowerCase();
  if (filename.includes("2d") || filename.includes("3d")) {
    return filename.replace("2d", "-2d").replace("3d", "-3d");
  }
  return filename;
}

async function bigAssFile(geotypes: GeotypesMetadata) {
  const typeFunks = geotypes.geotypes.map((tname) => typeFunctions(tname));
  const geotypes2import = [...geotypes.geotypes];
  // blah blah sort
  geotypes2import.sort((a, b) => a.localeCompare(b));
  const geotypesImports = [
    "import type {",
    geotypes2import.map((tname) => `  ${tname},`).join("\n"),
    '} from "@jsse/geotypes";',
  ];
  const lines = [
    // turn off eslint explicit any
    "/* eslint-disable @typescript-eslint/no-explicit-any,@typescript-eslint/no-unused-vars */",
    "// eslint-disable-next-line @typescript-eslint/ban-ts-comment",
    "// @ts-nocheck",
    TYPIA_IMPORT,
    "",
    ...geotypesImports,
    "",
    ...typeFunks,
  ];
  const string = lines.join("\n");
  await fs.writeFile(`${TYPIA_SRC}/geotypes.ts`, string);
}

async function smallAssFiles(geotypes: GeotypesMetadata) {
  await fs.mkdirp(path.join("src", "geotypes"));
  const _smallAssFile = async (tname: string) => {
    const filename = typename2filename(tname);
    const typeFunks = typeFunctions(tname);
    const lines = [
      TYPIA_IMPORT,
      `import type { ${tname} } from "@jsse/geotypes";`,
      typeFunks,
    ];
    const string = lines.join("\n");
    const outputFilepath = path.join("src", "geotypes", `${filename}.ts`);
    await fs.writeFile(outputFilepath, string);
    // await fs.writeFile(`${TYPIA_SRC}/${filename}.ts`, string);
    const info = {
      filename,
      fn_names: typeFunctionNames(tname),
    };
    return info;
  };

  const infos = await Promise.all(
    geotypes.geotypes.map((tname) => _smallAssFile(tname)),
  );
  const indexLines = [
    `/* auto-generated ~ build.mts */`,
    ...infos.map(
      (info) => {
        return [
          "export {",
          ...info.fn_names.map((fn_name) => `  ${fn_name},`),
          `} from "./geotypes/${info.filename}.js";`,
        ].join("\n");
      },
      // `export { ${info.fn_names.join(", ")} } from "./geotypes/${info.filename}.js";`,
    ),
  ];
  const indexString = indexLines.join("\n");
  const indexFilepath = path.join("src", "geotypes.ts");
  await fs.writeFile(indexFilepath, indexString);
}

async function nuke_input_dir() {
  await $`rm -rfv ${TYPIA_SRC}`;
  await $`mkdir -p ${TYPIA_SRC}`;
}

const BLACKLIST_TYPES = ["Z"];
const BLACKLIST_TYPES_PATTERNS = ["Hgt", "Readonly"];
const BLACKLIST_TYPES_SET = new Set(BLACKLIST_TYPES);

function filterTypes(tname: string) {
  return (
    !BLACKLIST_TYPES_SET.has(tname) &&
    !BLACKLIST_TYPES_PATTERNS.some((pattern) => tname.includes(pattern))
  );
}

async function genTypiaSrc() {
  const data = (await fs.readJSON(
    "../geotypes/geotypes.json",
  )) as GeotypesMetadata;
  await nuke_input_dir();

  data.geotypes = data.geotypes.filter((tname) => filterTypes(tname));
  if (BIG_FILE) {
    await bigAssFile(data);
  } else {
    await smallAssFiles(data);
  }
}

async function preBuild() {
  await genTypiaSrc();
}

async function run(command: keyof typeof COMMANDS) {
  debug`Running command: ${command}`;
  const ti = Date.now();
  await COMMANDS_FNS[command]();
  const tf = Date.now();
  debug`Finished: ${command} (dt: ${tf - ti}ms)`;
}

async function main() {
  if (argv._.length === 0) {
    errecho`No command specified`;
    echoHelp();
    process.exit(1);
  }
  if (HELP) {
    echoHelp();
    process.exit(0);
  }

  debug({
    argv,
  });
  if (argv._.length > 1) {
    errecho`Too many commands specified`;
    echoHelp();
    process.exit(1);
  }
  const command = argv._[0];
  if (!isCommand(command)) {
    errecho`Unknown command: ${command}`;
    echoHelp();
    process.exit(1);
  }

  await run(command);
}

main()
  .catch((e) => {
    console.error(e);
    debug`Exiting with error`;
    process.exit(1);
  })
  .finally(() => {
    debug`Exiting`;
    process.exit(0);
  });
