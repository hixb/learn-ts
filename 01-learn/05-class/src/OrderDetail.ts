// 订单详情类
export default class OrderDetail {
  public orderDetailId: number = 0; // 订单号
  public productName: string = "iPhone"; // 商品名称
  public price: number = 0; // 价格
  public count: number = 0; // 购买数

  constructor(orderDetailId_: number, productName_: string, price_: number, count_: number) {
    this.orderDetailId = orderDetailId_;
    this.productName = productName_;
    this.price = price_;
    this.count = count_;
  }
}
