const { spawn } = require("child_process");
const path = require("path");

const args = process.argv.slice(2);

if (args.length === 0) {
  throw new Error("Missing Next.js command.");
}

const projectRoot = process.cwd();
const nodeModulesPath = path.join(projectRoot, "node_modules");
const nextBinPath = path.join(nodeModulesPath, "next", "dist", "bin", "next");
const env = {
  ...process.env,
  NODE_PATH: process.env.NODE_PATH
    ? `${nodeModulesPath}${path.delimiter}${process.env.NODE_PATH}`
    : nodeModulesPath
};

const child = spawn(process.execPath, [nextBinPath, ...args], {
  cwd: projectRoot,
  env,
  stdio: "inherit"
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
