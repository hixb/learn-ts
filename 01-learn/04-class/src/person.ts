class Person {
  // public: 访问修饰符(访问的范围)

  // ts4.0 之前属性如果没有赋值的解决方法, 增加一个 undefined 数据类型
  // public name: string | undefined;
  // 类上定义的属性一定是描绘这个类本身的特征, 不能把一些无关的变量定义成类属性
  public name: string = "noname";
  public age: number = 0;
  public phone: number = 121212122;

  // function: 错误, 类中定义方法不能使用 function
  // public doEat(): number {
  //   return "ss" // 不能将类型 "string" 分配给类型 "number"
  //   return 3
  // }

  public doEat(who: string, address: string): void { // 方法默认的返回值为: void
    console.log(`${this.name}和${who}在一起吃饭, 地址在${address}`);
  }
}

let zhangSanPerson = new Person();
// 给对象赋值的两种方式
// 1. 通过类中属性或者方法来赋值
zhangSanPerson.name = "zhuxb";
zhangSanPerson.age = 18;
zhangSanPerson.phone = 1323435654;

zhangSanPerson.doEat("lis", "北京");
// 2. 通过构造函数[构造器]来赋值

