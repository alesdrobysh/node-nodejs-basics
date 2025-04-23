import fs from "fs/promises";
import { exists } from "./exists.mjs";
import path from "path";
import url from "url";

const sourceFolderPath = path.join(
  url.fileURLToPath(import.meta.url),
  "..",
  "files",
);
const targetFolderPath = path.join(
  url.fileURLToPath(import.meta.url),
  "..",
  "files_copy",
);

const copy = async () => {
  if (!(await exists(sourceFolderPath))) {
    throw new Error("FS operation failed");
  }

  if (await exists(targetFolderPath)) {
    throw new Error("FS operation failed");
  }

  await fs.mkdir(targetFolderPath);

  const files = await fs.readdir(sourceFolderPath);

  await Promise.all(
    files.map(async (file) => {
      const srcPath = path.join(sourceFolderPath, file);
      const destPath = path.join(targetFolderPath, file);

      if ((await fs.stat(srcPath)).isFile()) {
        return fs.copyFile(srcPath, destPath);
      }
    }),
  );
};

await copy();
