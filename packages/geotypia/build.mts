import process from "node:process";
import { $, fs } from "zx";

const TYPIA_SRC = "./src/typia-src";
const TYPIA_IMPORT = 'import typia from "typia";';
const BIG_FILE = true;
type FileTypeExports = {
  fspath: string;
  types: string[];
};
type GeotypesMetadata = {
  files: FileTypeExports[];
  geotypes: string[];
};
const typeFunctionNames = (tname: string) => [
  `assert${tname}`,
  `equals${tname}`,
  `is${tname}`,
  `random${tname}`,
  `stringify${tname}`,
  `validate${tname}`,
];

const typeFunctions = (tname: string) => `
// ${tname}
export const assert${tname} = typia.createAssert<${tname}>();
export const equals${tname} = typia.createEquals<${tname}>();
export const is${tname} = typia.createIs<${tname}>();
export const random${tname} = typia.createRandom<${tname}>();
export const stringify${tname} = typia.json.createStringify<${tname}>();
export const validate${tname} = typia.createValidate<${tname}>();
`;

// PascalCase to kebab-case
const typename2filename = (tname: string) => {
  const filename = tname
    .replaceAll(/([a-z])([A-Z])/g, "$1-$2")
    .replaceAll(/\s+/g, "-")
    .toLowerCase();
  if (filename.includes("2d") || filename.includes("3d")) {
    return filename.replace("2d", "-2d").replace("3d", "-3d");
  }
  return filename;
};

const bigAssFile = async (geotypes: GeotypesMetadata) => {
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
};

const smallAssFiles = async (geotypes: GeotypesMetadata) => {
  const _smallAssFile = async (tname: string) => {
    const filename = typename2filename(tname);
    const typeFunks = typeFunctions(tname);
    const lines = [
      TYPIA_IMPORT,
      `import type { ${tname} } from "@jsse/geotypes";`,
      "",
      typeFunks,
    ];
    const string = lines.join("\n");
    await fs.writeFile(`${TYPIA_SRC}/${filename}.ts`, string);
    const info = {
      filename,
      fn_names: typeFunctionNames(tname),
    };
    return info;
  };

  const infos = await Promise.all(
    geotypes.geotypes.map((tname) => _smallAssFile(tname)),
  );
  return infos;
};

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

async function main() {
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

  // // const
  // for (const tname of data.geotypes) {
  //   const filename = typename2filename(tname);
  //   await fs.writeFile(`./src/typia-input/${filename}.ts`, typeFunctions(tname));
  // }
}

try {
  await main();
} catch (e) {
  console.error(e);
  process.exit(1);
}
