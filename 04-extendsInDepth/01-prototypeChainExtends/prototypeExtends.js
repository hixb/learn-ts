function Parent(name, age) {
  this.name = name;
  this.age = age;
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
Son.prototype = new Parent("往往", 44);
console.log("Son.prototype 原型链继承之后的指向", Son.prototype);

const sonObj2 = new Son("打篮球", "男");
console.log("sonObj2: ", sonObj2)
