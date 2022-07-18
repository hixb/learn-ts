import MyLocalStorage from "./MyLocalStorage";

// let myLocalStorage = new MyLocalStorage();

// MyLocalStorage.getInstance();
// myLocalStorage.setItem("loginUser", {username: "hizb", age: 23});

console.log("MyLocalStorage.getTotal() <===> 1", MyLocalStorage.getTotal());
MyLocalStorage.addTotal();
console.log("MyLocalStorage.getTotal() <===> 2", MyLocalStorage.getTotal());
MyLocalStorage.addTotal();
console.log("MyLocalStorage.getTotal() <===> 3", MyLocalStorage.getTotal());
MyLocalStorage.addTotal();


import newTotal from "./Test2";

console.log("newTotal =>>>>", newTotal);
