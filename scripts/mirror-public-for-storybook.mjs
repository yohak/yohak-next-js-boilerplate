import * as fs from "fs";
import * as path from "path";
import { ensureDir } from "fs-extra";

const mirrorPublicForStorybook = () => {
  copyDirectoryRecursiveSync("./public", "./storybook");
};

const copyDirectoryRecursiveSync = (source, target, move) => {
  if (!fs.lstatSync(source).isDirectory()) return;
  ensureDir(target);

  const operation = move ? fs.renameSync : fs.copyFileSync;
  fs.readdirSync(source).forEach(function (itemName) {
    const sourcePath = path.join(source, itemName);
    const targetPath = path.join(target, itemName);

    if (fs.lstatSync(sourcePath).isDirectory()) {
      fs.mkdirSync(targetPath);
      copyDirectoryRecursiveSync(sourcePath, targetPath);
    } else {
      operation(sourcePath, targetPath);
    }
  });
};

mirrorPublicForStorybook();
