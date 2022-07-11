import OrderDetail from "./OrderDetail";

class Order2 {
  public orderId: number | undefined;
  public date: Date | undefined;
  public customerName: string | undefined;
  public phone: number | undefined;
  public orderDetailArray: Array<OrderDetail> = [];

  constructor(
    orderId_: number,
    date_: Date,
    customerName_: string,
    phone_: number,
    orderDetailArray_: Array<OrderDetail>
  ) {
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

let order = new Order2(1, orderDate, "zxb", 345345435, orderDetailArray_);
console.log(order);
