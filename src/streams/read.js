import path from "path";
import url from "url";
import fs from "fs";

const read = async () => {
  const filePath = path.join(
    url.fileURLToPath(import.meta.url),
    "../files/fileToRead.txt",
  );

  const stream = fs.createReadStream(filePath);

  stream.pipe(process.stdout);
  stream.on("end", console.log); // flushes stdout before exiting the process
};

await read();
