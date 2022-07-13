// 1. 对现有的数数组进行封装, 让数组的增删改, 变得更加好用
// 2. 提供 get 方法, remove方法, 显示方法[add方法]
// 其中需求中的remove方法有两个, 使用方法重载

class ArrayList {
  // 1. 定义一个引用属性[数组]
  constructor(public element: Array<object>) {
  }

  // 2. 根据索引来查询数组中指定的元素
  get(index: number) {
    return this.element[index];
  }

  // 3. 显示方法
  show() {
    this.element.forEach(el => {
      console.log(el)
    })
  }
}

let stuOne = {stuName: "ZhangSan", age: 13};
let stuTow = {stuName: "LiSi", age: 22};
let stuThree = {stuName: "WangErMa", age: 28};

let arr = new ArrayList([stuOne, stuTow, stuThree]);

arr.show();

// 如果根据数字去删除元素, remove方法返回的是一个数字
// 如果根据对象去删除元素, remove方法返回的是一个对象
// const result = arr.remove(1);
