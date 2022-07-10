class Person {
  // public: 访问修饰符(访问的范围)

  // ts4.0 之前属性如果没有赋值的解决方法, 增加一个 undefined 数据类型
  // public name: string | undefined;
  // 类上定义的属性一定是描绘这个类本身的特征, 不能把一些无关的变量定义成类属性
  public name: string = "noname";
  public age: number = 0;
  public phone: number = 121212122;
  // 对象的变量 = 实例的变量 = 类的[非静态的]属性 === 简称属性
  // 实例属或者对象属性

  constructor(name_: string, age_: number, phone_: number) {
    this.name = name_;
    this.age = age_;
    this.phone = phone_;
  }

  // function: 错误, 类中定义方法不能使用 function
  // public doEat(): number {
  //   return "ss" // 不能将类型 "string" 分配给类型 "number"
  //   return 3
  // }

  public doEat(who: string, address: string): void { // 方法默认的返回值为: void
    console.log(`${this.name}和${who}在一起吃饭, 地址在${address}`);
  }
}

// let zhangSanPerson = new Person("");
// 给对象赋值的两种方式
// 1. 通过类中属性或者方法来赋值
// zhangSanPerson.name = "zhuxb";
// zhangSanPerson.age = 18;
// zhangSanPerson.phone = 1323435654;
// zhangSanPerson.doEat("lis", "北京");

// 2. 通过构造函数[构造器]来赋值
// 创建对象一共做了三件事
//    1. 在堆中为类的某个对象[实例]分配了一个空间
//    2. 调用对应的构造函数[构造器], 并且把构造器中的各个参数值赋值给对象属性
//       new Person()自动匹配无参数构造器
//    3. 把对象赋值给对象变量[把实例赋值给实例变量]
let zhangSanPerson = new Person("liSi", 12, 3334543);
zhangSanPerson.doEat("lis", "北京");
console.log(zhangSanPerson);
