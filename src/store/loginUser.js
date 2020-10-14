import * as userService from "../services/userService";
export default {
    namespaced: true,// 开启命名空间
    state: {
        data: null,
        isLoading: false
    },
    mutations: {
        setIsLoading(state, payload){
            state.isLoading = payload;
        },
        setData(state, payload){
            state.data = payload;
        }
    },
    actions: {
        async login(context, payload){
            context.commit("setIsLoading", true);
            var resp = await userService.login(payload);
            var result = false;
            if(resp.code === 0){
                //登录成功
                context.commit("setData", resp.data);
                result = true;
            }
            context.commit("setIsLoading", false);
            return result;
        },
        async whoAmI(context){
            context.commit("setIsLoading", true);
            var resp = await userService.whoamI();
            context.commit("setData", resp);
            context.commit("setIsLoading", false);
        },
        loginOut(context){
            userService.loginOut();
            context.commit("setData", null)
        }
    }
}