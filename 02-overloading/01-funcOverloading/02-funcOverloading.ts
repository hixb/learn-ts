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

function getMessage(id: number): Message; // 重载签名, 可以有多个
function getMessage(msgType: MessageType, readRecordCount?: number): Message[]; // 重载签名

// 实现签名函数, 只有实现签名才有函数体, 实现签名只能有一个
function getMessage(payload: any, readRecordCount?: number): Message[] | Message | undefined {
  return typeof payload === "number"
    ? message.find(item => payload === item.id)
    : readRecordCount
      ? message.filter(item => payload === item.type).splice(0, readRecordCount)
      : message.filter(item => payload === item.type);
}

getMessage(1);
getMessage("image", 2).forEach(item => {
  console.log("msg", item);
})

export {}
