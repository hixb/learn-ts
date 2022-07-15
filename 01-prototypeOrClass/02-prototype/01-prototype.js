function QQUser(QQNo_, QQAge_, QQMark_) {
  this.QQNo = QQNo_; // QQ号
  this.QQAge = QQAge_; // Q龄
  this.QQMark = QQMark_; // QQ标签
}

// 数组是引用对象类型 引用类型 对象类型 引用数据类型
// 数组也是一种引用数据类型
// QQUser.prototype.QQMark = "abc";
QQUser.prototype.commonFriends = ["hello", "hi", "你好", "嗨"];
// 方法也是一种数据引用类型
QQUser.prototype.show = function () {
  console.log(`QQNo: ${this.QQNo}, QQAge: ${this.QQAge}, QQMark: ${this.QQMark}`);
  console.log(`共同的好友: ${this.commonFriends}`);
}

let qqZhangSan = new QQUser(345345, 15, "嘁嘁嘁");
let qqLiSi = new QQUser("466535", 22, "将进酒");

// console.log("qqZhangSan.QQMark: ", qqZhangSan.QQMark);
console.log("qqZhangSan.commonFriends: ", qqZhangSan.commonFriends);
console.log("qqLiSi.commonFriends: ", qqLiSi.commonFriends);


/**
 * 认识函数 + 原型定义
 * (1) 函数也是一个对象, 当真正呢个开始执行函数, 执行环境[开发时为浏览器或控制台]会为函数分配一个函数对象变量空间
 *     和函数对象空间, 函数对象变量用函数名表示, 存在栈空间中, 函数对象空间是子啊堆中开辟的一个内存空间, 这个空间中有一个
 *     默认的prototype属性, 这个prototype属性就是一个原型对象属性[也叫对象变量]
 * (2) 函数和构造函数的区别
 *        当通过new函数()时, 此刻函数就是构造函数[日后会演变成ts类的构造器]
 * (3) 定义: 原型[prototype]是定义函数有js自动分配给函数的一个可以被所有构造函数实例对象变量共享的对象变量[也叫对象属性]
 */
