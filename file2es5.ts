import * as fs from "fs";
import { parse } from "@babel/parser";
import * as babel from "@babel/core";

const code = fs.readFileSync("./test.js").toString();
const ast = parse(code, { sourceType: "module" });
const result = babel.transformFromAstSync(ast, code, {
  presets: ["@babel/preset-env"],
});

fs.writeFileSync("./test.es5.ts", result?.code || "");
