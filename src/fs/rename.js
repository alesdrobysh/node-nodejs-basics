import fs from "fs/promises";
import { exists } from "./exists.mjs";
import path from "path";
import url from "url";

const oldPath = path.join(
  url.fileURLToPath(import.meta.url),
  "..",
  "files",
  "wrongFilename.txt",
);
const newPath = path.join(
  url.fileURLToPath(import.meta.url),
  "..",
  "files",
  "properFilename.md",
);

const rename = async () => {
  if (!(await exists(oldPath))) {
    throw new Error("FS operation failed");
  }

  if (await exists(newPath)) {
    throw new Error("FS operation failed");
  }

  await fs.rename(oldPath, newPath);
};

await rename();
