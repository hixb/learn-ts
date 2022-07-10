function QQUser(QQNo_, QQAge_, QQMark_) {
  this.QQNo = QQNo_; // QQ号
  this.QQAge = QQAge_; // Q龄
  this.QQMark = QQMark_; // QQ标签
}

QQUser.prototype.commonFriends = ["hello", "hi", "你好", "嗨"];
QQUser.prototype.show = function () {
  console.log(`QQNo: ${this.QQNo}, QQAge: ${this.QQAge}, QQMark: ${this.QQMark}`);
  console.log(`共同的好友: ${this.commonFriends}`);
}

let qqZhangSan = new QQUser(345345, 15, "嘁嘁嘁");
let qqLiSi = new QQUser("466535", 22, "将进酒");

QQUser.prototype.commonFriends.push("大🌲");

console.log("qqZhangSan.commonFriends: ", qqZhangSan.commonFriends);
console.log("qqLiSi.commonFriends: ", qqLiSi);

let obj = { username: "WangWu", age: 23 };
let objNew = obj;
// 改变
// obj.username = "XiaoLi";
// 增加
// obj.phone = "12353454645";
// 覆盖
obj = { address: "北京市东城区" };
console.log(obj);
console.log(objNew);

/**
 * 如何访问原型对象空间上的属性和方法
 * (1) 构造函数所有实例对象都可以访问型对象空间上的属性和方法[每一个实例都有默认的__proto__属性, 这个__proto__属性指向原型对象空间]
 * (2) 关于__proto__: new在创建新对象的时候, 灰赋予新对象一个属性指向构造函数的prototype属性, 这个属性就是__proto__
 * (3) 可以直接通过构造函数.prototype对象属性来访问原型对象空间上的属性和方法
 */
