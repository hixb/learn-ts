// 各种图形的求面积参数
type typeChartParam = {
  width?: number;
  height?: number;
  radius?: number;
}

// 计算正方形面积
// 计算创建正方形对象, 可以给构造器传递宽和高, 也可以给构造器传递一个包含了宽和高的形状参数对象
class Square {
  public width: number;
  public height: number;

  constructor(width_: number, height_: number);
  constructor(paramObj: typeChartParam);
  constructor(paramObjOrWidth_: any, height_: number = 0) {
    if (typeof paramObjOrWidth_ === "object") {
      const {width = 0, height = 0} = paramObjOrWidth_;
      this.width = width;
      this.height = height;
    } else {
      this.width = paramObjOrWidth_;
      this.height = height_;
    }
  }

  public getArea(): number {
    return this.height * this.width;
  }
}

// let square = new Square(30, 50);
// console.log(square.getArea());
let chartParamObj: typeChartParam = {width: 50, height: 90};
let square = new Square(chartParamObj);
console.log(square.getArea());
