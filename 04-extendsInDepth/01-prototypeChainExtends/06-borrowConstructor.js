function Parent(name, age) {
  this.name = name;
  this.age = age;
  console.log("this: ", this);
  console.log("this.name: ", this.name);
}

Parent.prototype.friends = ["xiaozhang", "xiaoli"]
Parent.prototype.eat = function () {
  console.log(this.name + " 吃饭");
}

function Son(name, age, favor, sex) {
  this.favor = favor; // 兴趣爱好
  this.sex = sex;
  this.name = "noname";
  Parent.call(this, name, age); // TS继承中使用super
}

// function Son2 (name, age, address, sex) {
//   this.address = address // 兴趣爱好
//   this.sex = sex
//   Parent.call(this, name, age)// TS继承中使用super
// }

let sonObj2 = new Son("lisi", 34, "打篮球", "男");
console.log("sonObj2:", sonObj2);
console.log("sonObj2.friends:", sonObj2.friends); // undefined


