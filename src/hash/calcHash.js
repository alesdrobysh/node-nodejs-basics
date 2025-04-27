import path from "path";
import url from "url";
import fs from "fs";
import crypto from "crypto";
import { pipeline } from "stream/promises";

const calculateHash = async () => {
  const filePath = path.join(
    url.fileURLToPath(import.meta.url),
    "../files/fileToCalculateHashFor.txt",
  );
  const hash = crypto.createHash("sha256");

  await pipeline(fs.createReadStream(filePath), hash);

  console.log(hash.digest("hex"));
};

await calculateHash();
