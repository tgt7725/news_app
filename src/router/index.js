import VueRouter from "vue-router"
import Vue from "vue"
import config from "./config"
import store from "../store"
//1.安装
Vue.use(VueRouter);
//2.创建路由对象
var router = new VueRouter(config);

router.beforeEach(function(to, from, next){
    if(to.meta.needLogin){
        // 需要登录才能访问
        if(store.state.loginUser.isLoading){// 加载中的鉴权页面
            // console.log(to.fullPath);
            next({name: "Auth", query: {returnUrl: to.fullPath}})
        }
        else if(store.state.loginUser.data){// 登录成功
            next();
        }else {// 登录失败
            next({name: "Login"});
        }
    }
    else {
        next();
    }
})


export default router;