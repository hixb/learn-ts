export default class MyLocalStorage {
  // 静态属性和对象属性是类中的两大成员
  static localStorage: MyLocalStorage;
  private static total: number = 0;

  private constructor() {
    console.log("这是ts的单件设计模式的静态方法的构造器");
  }

  // 提供一个外部访问的方法, 通过这个方法用来提供外部得到一个对象的方法
  // 1. 带 static 关键字的方法就是一个静态方法
  // 2. 静态方法和对象无关, 外部的对象变量不能调用静态方法和静态属性
  // 3. 外部可以通过类名来调用
  // 静态方法不可以访问实例属性或实例方法[对象属性或对象方法]
  public static getInstance() {
    // 如果静态的属性没有指向创建对象
    if (!this.localStorage) {
      this.localStorage = new MyLocalStorage();
    }
    return this.localStorage;
  }

  public static addTotal() {
    this.total += 3;
  }

  public static getTotal() {
    return this.total;
  }

  public setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string) {
    const getLoginUser = localStorage.getItem(key);
    return getLoginUser ? JSON.parse(getLoginUser) : null;
  }
}

/**
 * 构建单件设计模式
 *  1. 把构造器设置为私有的, 不允许外部赖创建类的实例[对象]
 *  2. 至少应该提供一个外部访问的方法获属性, 外部可以通过这个方法或属性来得到一个对象, 所以应该把这个方法设置为静态方法
 *  3. 外部调用第二步提供的静态方法来获取一个对象
 */
