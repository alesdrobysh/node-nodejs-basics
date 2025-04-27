import fs from "fs/promises";
import { exists } from "./exists.mjs";
import path from "path";
import url from "url";

const folderPath = path.join(url.fileURLToPath(import.meta.url), "..", "files");

const list = async () => {
  if (!(await exists(folderPath))) {
    throw new Error("FS operation failed");
  }

  const files = await fs.readdir(folderPath);

  files.forEach((file) => console.log(file));
};

await list();
