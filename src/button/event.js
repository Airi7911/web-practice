import { readTarget } from "./read";
import { writeText } from "./write";

export const clickEvent = () => {
  const target = readTarget();
  writeText(target);
};