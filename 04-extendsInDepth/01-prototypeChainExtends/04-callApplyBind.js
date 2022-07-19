const peopleObj = {
  name: "zhuxb",
  ppl_age: this.age,
  eat(address, who) {
    // console.log("this", this); // { name: 'xiaobing', age: 18 }
    // console.log("this.name", this.name);
    this.address = address;
    this.who = who;
    console.log("this: ", this);
    console.log(this.name + " 年龄: " + this.age + " 和 " + this.who + " 在 " + this.address + "吃饭");
    return 3;
  }
}

let myObj = {
  name: "xiaobing",
  age: 18
}

// call 和 apply 方法的使用
console.log("myObj1: ", myObj);
peopleObj.eat.call(myObj, "北京市", 18);
console.log("myObj2: ", myObj);
