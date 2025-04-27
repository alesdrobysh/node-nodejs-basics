import fs from "fs/promises";
import { exists } from "./exists.mjs";
import path from "path";
import url from "url";

const pathToRemove = path.join(
  url.fileURLToPath(import.meta.url),
  "..",
  "files",
  "fileToRemove.txt",
);

const remove = async () => {
  if (!(await exists(pathToRemove))) {
    throw new Error("FS operation failed");
  }

  await fs.unlink(pathToRemove);
};

await remove();
