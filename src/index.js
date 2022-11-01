import { NodeType } from "@yangzw/bruce-us/dist/node";

// read file

import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

console.log(NodeType());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__filename, __dirname);

const json = readFileSync(join(__dirname, "./info.json"));
const info = JSON.parse(json);
console.log("info== ", info);