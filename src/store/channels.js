import {getNewsChanels} from "../services/newsService"

export default {
    namespaced: true,// 开启命名空间
    state: {
        data: [],
        isLoading: false
    },
    mutations: { // 更改数据
        // state为原来的状态，payload为负荷
        setIsLoading(state, payload){
            state.isLoading = payload;
        },
        setData(state, payload){
            state.data = payload;
        }
    },
    actions: {
        async fetchDatas(context){
            context.commit("setIsLoading", true); // 调用处理器函数（提交mutation）
            var channels = await getNewsChanels();
            context.commit("setData", channels);
            context.commit("setIsLoading", false)
        }
    }
}