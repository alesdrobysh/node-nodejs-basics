import zlib from "zlib";
import path from "path";
import url from "url";
import fs from "fs";

const compress = async () => {
  const sourcePath = path.join(
    url.fileURLToPath(import.meta.url),
    "../files/fileToCompress.txt",
  );
  const targetPath = path.join(
    url.fileURLToPath(import.meta.url),
    "../files/archive.gz",
  );

  fs.createReadStream(sourcePath)
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(targetPath));
};

await compress();
