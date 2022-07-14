function QQUser(QQNo_, QQAge_, QQMark_) {
  this.QQNo = QQNo_; // QQ号
  this.QQAge = QQAge_; // Q龄
  this.QQMark = QQMark_; // QQ标签

  // 数组是引用对象类型 引用类型 对象类型 引用数据类型
  // 数组也是一种引用数据类型
  this.commonFriends = ["hello", "hi", "你好", "嗨"] // 共同好友
  // 方法也是一种数据引用类型
  this.show = function () {
    console.log(`QQNo: ${this.QQNo}, QQAge: ${this.QQAge}, QQMark: ${this.QQMark}`)
    console.log(`共同的好友: ${this.commonFriends}`)
  }
}


// 对象也叫实例(instance)
// QQZhangSan 叫做变量对象, 对象是等号右边通过new出来的一个实例, 而且是运行期间才在堆中开辟对象的内存空间
// 一般对象变量是再栈中存在的
let qqZhangSan = new QQUser(345345, 15, "嘁嘁嘁");
let qqLiSi = new QQUser("466535", 22, "将进酒");
let qqLiuWu = new QQUser(4535335, 12, "被摸头");


qqZhangSan.show();
qqLiSi.show();
qqLiuWu.show();


/**
 * Q: 为什么要用原型?
 *  原型上的所有方法和属性都可以被构造函数[实际开发原型主要共享方法和所有实例公共引用属性]的实力共享
 *
 * ----------------------------
 *
 * Q: 没有用原型会有什么问题?
 *  所有QQUser对象[也叫QQUser实例]都有相同的好友属性, 好友属性用(commonFriends表示), 所有QQUser对象都有相同的show方法.
 * 但是每一个QQUser对象[也叫QQUser实例]都单独分配一个commonFriends属性空间和show方法空间, 但是大量的空间浪费.
 *
 * 答案: 使用原型解决所有实例上的方法, 还有所有实例上的共同属性否可以放到原型上去定义
 *
 */
