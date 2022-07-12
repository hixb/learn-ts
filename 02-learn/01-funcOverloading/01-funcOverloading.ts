type MessageType = "image" | "audio" | string; // 微信消息类型
type Message = {
  id: number;
  type: MessageType;
  sendMessage: string;
}

let message: Message[] = [
  {
    id: 1, type: "image", sendMessage: "hello, 你好啊"
  },
  {
    id: 2, type: "audio", sendMessage: "hi, 你好啊"
  },
  {
    id: 3, type: "audio", sendMessage: "你去那里"
  },
  {
    id: 4, type: "image", sendMessage: "你呢"
  },
  {
    id: 5, type: "image", sendMessage: "北京"
  },
  {
    id: 6, type: "audio", sendMessage: "哪?"
  },
  {
    id: 7, type: "image", sendMessage: "沙雕?"
  },
]

// 不使用函数重载来实现
// 函数结构不分明, 可复性/可维护性差
function getMessage(value: number | MessageType): Message | undefined | Array<Message> {
  return typeof value === "number"
    ? message.find(item => value === item.id)
    : message.filter(item => value === item.type);
}
// ts 没有办法在运行之前根据传递的值来推导方法最终返回的数据的类型
// 只可以根据方法定义的类型展现
// const msg = getMessage(1);

const msg = (<Message>getMessage(1)).sendMessage;
console.log(msg);

export {}
