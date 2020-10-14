export default {
    mode: "history",
    routes: [
        {
            path:"/",
            name: "Home",
            component: () => import("@/components/views/Home")
        },
        {
            path:"/login",
            name: "Login",
            component: () => import("@/components/views/Login")
        },
        {
            path:"/reg",
            name: "Reg",
            component: () => import("@/components/views/Reg")
        },
        {
            path:"/channel/:id", // :id 表示动态路径
            name: "Channel",
            component: () => import("@/components/views/ChannelNews")
        },
        {
            path:"/personal",
            name: "Personal",
            component: () => import("@/components/views/Personal"),
            meta: {needLogin: true}
        },
        {
            path:"/auth",
            name: "Auth",
            component: () => import("@/components/views/Auth")
        },
        {
            path:"*",
            name: "404",
            component: () => import("@/components/views/NotFound")
        },
    ]
}