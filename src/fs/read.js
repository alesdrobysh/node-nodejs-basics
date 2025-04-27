import fs from "fs/promises";
import { exists } from "./exists.mjs";
import path from "path";
import url from "url";

const filePath = path.join(
  url.fileURLToPath(import.meta.url),
  "..",
  "files",
  "fileToRead.txt",
);

const read = async () => {
  if (!(await exists(filePath))) {
    throw new Error("FS operation failed");
  }

  const data = await fs.readFile(filePath, "utf8");

  console.log(data);
};

await read();
