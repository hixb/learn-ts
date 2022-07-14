import OrderDetail from "./OrderDetail";

class Order {
  // 给构造器的参数如果加上 public, 这个参数就会变成一个属性
  // 这种简洁写法的两步综合体:
  //    1. 定义一个属性
  //    2. 等于默认构造函数会给这个属性赋值[隐式操作]
  constructor(
    public orderId: number,
    public date: Date,
    public customerName: string,
    public phone: number,
    public orderDetailArray: Array<OrderDetail>
  ) {

  }
}

const orderDetailOne = new OrderDetail(10, "电视机", 4999, 3);
const orderDetailTwo = new OrderDetail(11, "桌子", 3588, 2);
const orderDetailArray_: Array<OrderDetail> = [orderDetailOne, orderDetailTwo];
const orderDate = new Date(2023, 10, 17, 5, 20, 0);

let order = new Order(1, orderDate, "zxb", 345345435, orderDetailArray_);
console.log(order);
