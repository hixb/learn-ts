function Parent(name, age) {
  this.name = name;
  this.age = age;
}

Parent.prototype.friends = ["xiaozhang", "xiaoli"];
Parent.prototype.eat = function () {
  console.log(this.name + "吃法");
}

function Son(favor, sex) {
  this.favor = favor;
  this.sex = sex;
}

const parent = new Parent("zhuxb", 22);
console.log("parent: ", parent);
const sonObj = new Son("打篮球", "男");
console.log("sonObj: ", sonObj);

console.log("Son.prototype", Son.prototype);

// 原型链继承
// 继承带来的好处
//    子类对象变量可以访问父类的实例属性
//    子类对象变量可以访问父类原型对象空间中的属性和方法
Son.prototype = new Parent("往往", 44);
// 让Son类的对象或函数原型.prototype指向的原型对象空间[new Parent()对象空间, 有一个constructor属性]
// 指向了Son构造函数对象空间
Son.prototype.constructor = Son;
console.log("Son.prototype 原型链继承之后的指向", Son.prototype);

const sonObj2 = new Son("打篮球", "男");
console.log("sonObj2: ", sonObj2);
console.log("sonObj2访问son类自身的favor属性[构造函数中this定义的对象属性]: ", sonObj2.favor);
console.log("sonObj2访问son对象原型上name属性: ", sonObj2, name);
console.log("sonObj2:访问friends属性 ", sonObj2.friends);
