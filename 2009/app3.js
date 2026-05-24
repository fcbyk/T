/**
 * 导入
 * require() 是 Node.js 提供的一个全局函数
 * 用于同步地加载外部模块，并返回该模块的 module.exports 对象。
 * 通过 require() 函数，可以加载和使用本地模块、核心模块或第三方模块。
 */

const fs = require('fs');  // 加载 Node.js 的文件系统模块
const math = require('./math');  // 假设 math.js 存在，加载当前目录下的 math.js 文件
const express = require('express');  // 加载 npm 安装的 express 模块