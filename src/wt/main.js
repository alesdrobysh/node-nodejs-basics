import url from "url";
import path from "path";
import os from "os";
import { Worker } from "worker_threads";

const filePath = path.join(url.fileURLToPath(import.meta.url), "../worker.js");

const createWorkers = async () => {
  const workers = [];

  await Promise.all(
    os.cpus().map((_, index) => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(filePath, {
          workerData: 11 + index,
        });

        worker.on("online", () => {
          workers.push(worker);
          resolve();
        });
      });
    }),
  );

  return workers;
};

const runWorkers = async (workers) => {
  return Promise.all(
    workers.map(
      (worker) =>
        new Promise((resolve, reject) => {
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
        }),
    ),
  );
};

const performCalculations = async () => {
  const workers = await createWorkers();
  const result = await runWorkers(workers);

  console.log(result);
};

await performCalculations();
