localStorage.setItem("count", 30);

const loginInfo = {username: "hizb", age: 23}
localStorage.setItem("loginUser", JSON.stringify(loginInfo));

// 问题1: 代码零散
// 问题2: 可复性差
// 问题3: 对后期的维护产生印象
// 问题4: JSON.stringify, JSON.parse可以直接放到类中, 如果这样写得多, 影响开发效率
const getLoginUser = localStorage.getItem("loginUser");
getLoginUser ? JSON.parse(getLoginUser) : null;
