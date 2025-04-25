import path from "path";
import url from "url";
import child_process from "child_process";

const spawnChildProcess = async (args = []) => {
  const filePath = path.join(
    url.fileURLToPath(import.meta.url),
    "../files/script.js",
  );

  child_process.spawn("node", [filePath, ...args], {
    stdio: "inherit",
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["qwe", "rty"]);
