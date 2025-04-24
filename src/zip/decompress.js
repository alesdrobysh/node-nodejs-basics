import zlib from "zlib";
import path from "path";
import url from "url";
import fs from "fs";

const decompress = async () => {
  const sourcePath = path.join(
    url.fileURLToPath(import.meta.url),
    "../files/archive.gz",
  );

  const targetPath = path.join(
    url.fileURLToPath(import.meta.url),
    "../files/fileToCompress.txt",
  );

  fs.createReadStream(sourcePath)
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream(targetPath));
};

await decompress();
