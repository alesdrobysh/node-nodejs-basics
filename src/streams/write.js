import path from "path";
import url from "url";
import fs from "fs";

const write = async () => {
  const filePath = path.join(
    url.fileURLToPath(import.meta.url),
    "../files/fileToWrite.txt",
  );

  process.stdin.pipe(fs.createWriteStream(filePath));
};

await write();
