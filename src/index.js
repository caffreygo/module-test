import { NodeType } from "@yangzw/bruce-us/dist/node";
import path from "path";

// 高版本 Node (>13.2.0) 下，import 命令的文件后缀存在强制性
// CJS 的自动后缀处理行为可通过 --es-module-specifier-resolution=node 开启，所以这边第一个引用没有 .js
// node 环境下入口文件并不会受到 ESM 的影响，仍然是 CJS，可以使用 Node 模块，只是支持了对 ESM 文件的导入和使用

console.log(NodeType());

console.log(path);
