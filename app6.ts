/**
 * 混合类型接口
 * TypeScript 中的接口不仅仅限于对象的结构，还可以描述混合类型。可以定义一个既有方法，又有属性的接口。
 * Counter 接口同时定义了一个调用签名（函数类型）和一个属性（interval）。
 */
interface Counter {
  (start: number): void; // 调用签名
  interval?: number; // 属性
}

let counter: Counter = (start: number) => {
  console.log("Counting from", start);
};
counter.interval = 1000; // 设置 interval 属性