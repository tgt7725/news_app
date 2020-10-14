import axios from "axios"

function delay(duration){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve();
        }, duration);
    })
}
export async function login(loginInfo){
    // await delay(100);
    var resp = await axios.post("/api/user/login", loginInfo);
    var token = resp.headers.authorization; // 服务器的令牌
    if(token){
        localStorage.setItem("token", token);
    }
    return resp.data;
}

// 使用保存的令牌从服务器换取信息
export async function whoamI(){
    // await delay(100);
    var token = localStorage.getItem("token");
    if(!token){
        return null;
    }
    var resp = await axios.get("/api/user/whoami", {
        headers: {
            authorization: `bearer ${token}`
        }
    });
    return resp.data.data;
}

// 注销
export function loginOut(){
    localStorage.removeItem("token");
}

// 注册
export async function reg(userInfo){
    var resp = await axios.post("/api/user/reg", userInfo);
    return resp.data;
}