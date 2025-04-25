import url from "url";
import path from "path";
import os from "os";
import { Worker } from "worker_threads";

const filePath = path.join(url.fileURLToPath(import.meta.url), "../worker.js");

const runWorkers = () => {
  const workers = os.cpus().map((_, index) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker(filePath, {
        workerData: 11 + index,
      });

      worker.on("message", (data) =>
        resolve({
          status: "resolved",
          data,
        }),
      );
      worker.on("error", () =>
        reject({
          status: "rejected",
          data: null,
        }),
      );
    });
  });

  return Promise.all(workers);
};

const performCalculations = async () => {
  const result = await runWorkers();

  console.log(result);
};

await performCalculations();
