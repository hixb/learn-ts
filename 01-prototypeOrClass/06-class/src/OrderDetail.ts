// 订单详情类
export default class OrderDetail {
  // ts4之前针对
  // 没有初始化的值, 也没用在构造函数中明确给这个赋值的一个解决方案
  // 增加 undefined 类型就可以
  public orderDetailId: number | undefined; // 订单号
  public productName: string | undefined; // 商品名称
  // !
  public price!: number; // 价格
  public count!: number; // 购买数

  constructor(orderDetailId_: number, productName_: string, price_: number, count_: number) {
    this.orderDetailId = orderDetailId_;
    this.productName = productName_;
    this.price = price_;
    this.count = count_;
  }

  public getTotal(): number {
    return this.price * this.count;
  }
}

let orderDetail = new OrderDetail(12, "dd", 30, 1);

console.log(orderDetail.getTotal()); // NaN
console.log(typeof orderDetail.price); // undefined
