import Vue from 'vue'
import App from './App.vue'
import "./assets/style/common.css"
import router from "./router/index"
import store from "./store/index"
//import {getNewsChanels, getNews} from "./services/newsService.js"
import {login, whoamI, reg, loginOut} from "./services/userService"

Vue.config.productionTip = false


// 第一种方法
// getNewsChanels().then((resp) => {
//   console.log(resp);
// });

// 第二种方法
// async function test(){
//   var resp = await getNewsChanels();
//   console.log(resp);
// }
//test();

// login({loginId: "user", loginPwd: "123123"})
// whoamI()
// reg({loginId: "user02", loginPwd: "123123123", nickname: "hhh"})
// .then(resp => {
//   console.log(resp);
// })
// loginOut();

// 一开始就获取数据
store.dispatch("channels/fetchDatas");
store.dispatch("loginUser/whoAmI");
console.log("账号为：20200913, 密码为：20200913, 昵称为：进击的巨人");
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
