/**
 * 命名导入
 * 命名导入用于导入通过命名导出的模块内容。你必须使用与导出时相同的名字。
 * 也可以使用 as 关键字来重命名导入的模块成员
 */
import { add, pi } from './math.js';
import { originalName as newName } from 'module';
import { add as sum, subtract } from './math.js';

/**
 * 默认导入
 * 默认导入用于导入模块的默认导出内容。你可以为导入内容起一个任意的名字。
 */
import multiply from './calculator.js';

/**
 * 同时导入命名导出和默认导出
 */
import multiply, { add, pi } from './math.js';

/**
 * 导入整个模块为一个对象
 * 如何同时存在默认导出和命名导出
 * 通过math对象的属性进行访问，匿名默认导出通过math.default属性访问
 */
import * as math from './math.js';

/**
 * 导入 CDN 上的模块(使用 ESM 版本) 
 * 这种导入方式仅在 浏览器环境 中生效，通常是在<script type="module"> 标签使用
 * 这种导入方式必须满足以下几个条件
 * 确保是 ESM 格式的 CDN 版本
 * 支持 CORS，当你通过 import 从外部 URL 导入模块时，浏览器会检查该文件是否允许跨源请求。这通常需要 CORS（跨源资源共享） 头部的支持。
 */
import { debounce } from 'https://cdn.jsdelivr.net/npm/lodash-es@4.17.21/lodash.js';