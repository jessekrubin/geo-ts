import { fs, glob } from "zx";

type FileTypeExports = {
  fspath: string;
  types: string[];
};
type GeotypesMetadata = {
  files: FileTypeExports[];
  geotypes: string[];
};

function lineIsCommentedOut(line: string) {
  if (line.startsWith("//")) {
    return true;
  }
  if (line.startsWith("/*")) {
    return true;
  }
  return false;
}
function lineStartsWithExportType(line: string) {
  return line.startsWith("export type");
}
async function exportedTypesForFile(file: string): Promise<FileTypeExports> {
  const string = await fs.readFile(file, {
    encoding: "utf8",
  });
  const lines = string.split("\n");
  const exportedTypes = lines
    .filter((line) => {
      const thingy =
        lineStartsWithExportType(line) && !lineIsCommentedOut(line);
      return thingy;
    })
    .map((line) => {
      const split = line.split(" ")[2].replace(";", "");
      return split;
    })
    .map((typeAlias) => {
      return typeAlias.includes("<")
        ? typeAlias.slice(0, Math.max(0, typeAlias.indexOf("<")))
        : typeAlias;
    });
  // .map((typeAlias) => (typeAlias.includes("<") ? typeAlias.substring(0, typeAlias.indexOf("<")) : typeAlias));
  const exportedInterfaces = lines
    .filter(
      (line) =>
        line.includes("export interface") &&
        line.startsWith("export interface"),
    )
    .map((line) => line.split(" ")[2].replace(";", ""))
    .map((iname) =>
      iname.includes("<")
        ? iname.slice(0, Math.max(0, iname.indexOf("<")))
        : iname,
    );
  const types = [...exportedTypes, ...exportedInterfaces];

  // check for duplicates
  const duplicates = types.filter(
    (item, index) => types.indexOf(item) !== index,
  );
  if (duplicates.length > 0) {
    throw new Error(
      `Duplicate types found in ${file}: ${duplicates.join(", ")}`,
    );
  }
  const typesFinal = types.toSorted((a, b) => a.localeCompare(b));
  if (typesFinal.includes("type")) {
    throw new Error(
      `type is a reserved word, cannot export type named 'type' in ${file}`,
    );
  }
  return {
    fspath: file,
    types: typesFinal,
  };
}

async function typesIndex(files: FileTypeExports[]) {
  // const filepaths = files.map((file) =>
  //   path.basename(file.fspath).replace(".ts", ".js"),
  // );
  // const lines = filepaths.map((file) => `export * from "./${file}"`);
  // const string = lines.join("\n");
  // await fs.writeFile("./src/types/index.ts", string);

  const geotypesMetadata: GeotypesMetadata = {
    files,
    geotypes: files
      .flatMap((file) => file.types)
      // ...new Set(
      //   ...files.map((file) => file.types),
      // ),
      .toSorted((a, b) => a.localeCompare(b)),
  };
  // eslint-disable-next-line no-console
  console.log(geotypesMetadata.geotypes);
  await fs.writeFile(
    "./geotypes.json",
    JSON.stringify(geotypesMetadata, undefined, 2),
  );
}

async function main() {
  const filesAll = await glob("./src/types/*.ts");
  const files = filesAll
    .filter((file) => !file.includes("index.ts"))
    .toSorted((a, b) => a.localeCompare(b));
  const allTypes = await Promise.all(
    files.map(async (file) => exportedTypesForFile(file)),
  );
  await typesIndex(allTypes);
}

try {
  await main();
} catch (e) {
  console.error(e);
}
