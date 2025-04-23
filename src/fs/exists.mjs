import fs from "fs/promises";

export const exists = async (filepath) => {
  try {
    await fs.access(filepath);
    return true;
  } catch (error) {
    return false;
  }
};
