import fs from "fs/promises";
import path from "path";
import url from "url";
import { exists } from "./exists.mjs";

const create = async () => {
  const pathToFile = path.join(
    url.fileURLToPath(import.meta.url),
    "..",
    "files",
    "fresh.txt",
  );

  if (await exists(pathToFile)) {
    throw new Error("FS operation failed");
  }

  await fs.writeFile(pathToFile, "I am fresh and young");
};

await create();
