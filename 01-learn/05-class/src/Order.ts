import OrderDetail from "./OrderDetail";

class Order {
  // 订单ID / 订单日期, / 顾客地址 / 顾客名字 / 顾客微信 / 顾客手机号 / 客服
  public orderId: number = 0;
  public date: Date = new Date();
  public customerName: string = "zhuxb";
  public phone: number = 13345456456;
  // public orderDetail: OrderDetail[] = [];
  // 这是一个引用属性[数组类型的引用类型]
  public orderDetailArray: Array<OrderDetail> = []; // 定义了一个Array数组, Array数组当中的每一个元素都是 orderDetail 类型的元素

  constructor(orderId_: number, date_: Date, customerName_: string, phone_: number, orderDetailArray_: Array<OrderDetail>) {
    this.orderId = orderId_;
    this.date = date_;
    this.customerName = customerName_;
    this.phone = phone_;
    this.orderDetailArray = orderDetailArray_;
  }
}

const orderDetailOne = new OrderDetail(10, "电视机", 4999, 3);
const orderDetailTwo = new OrderDetail(11, "桌子", 3588, 2);
const orderDetailArray_: Array<OrderDetail> = [orderDetailOne, orderDetailTwo];
const orderDate = new Date(2023, 10, 17, 5, 20, 0);

let order = new Order(1, orderDate, "zxb", 345345435, orderDetailArray_);
console.log(order);
