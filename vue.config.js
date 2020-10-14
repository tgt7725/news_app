module.exports = {
    // vue的配置
    devServer: {// 针对开发服务器的配置
        proxy: {
            "/api": {// 当请求开头以 /api 开头时，开发服务器需要 代理 到指定路径
                target: "http://study.yuanjin.tech"
            }
        }
    }
}