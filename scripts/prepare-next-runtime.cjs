const fs = require("fs");
const os = require("os");
const path = require("path");

const projectRoot = process.cwd();
const projectNextPath = path.join(projectRoot, ".next");
const externalNextPath = path.join(os.homedir(), "AppData", "Local", "HuromataNext");

function ensureDirectory(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function removePath(targetPath) {
  if (!fs.existsSync(targetPath)) {
    return;
  }

  fs.rmSync(targetPath, { recursive: true, force: true });
}

function ensureJunction(linkPath, targetPath) {
  if (fs.existsSync(linkPath)) {
    const stats = fs.lstatSync(linkPath);

    if (stats.isSymbolicLink()) {
      const currentTarget = fs.realpathSync.native(linkPath);

      if (path.normalize(currentTarget) === path.normalize(targetPath)) {
        return;
      }
    }

    removePath(linkPath);
  }

  fs.symlinkSync(targetPath, linkPath, "junction");
}

ensureDirectory(externalNextPath);
ensureJunction(projectNextPath, externalNextPath);

console.log(`Prepared .next at ${externalNextPath}`);
