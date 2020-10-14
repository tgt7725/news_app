import axios from "axios"
import {APPCODE} from "./config"

export async function getNewsChanels(){
    var resp = await axios.get("http://ali-news.showapi.com/channelList",{
        headers: {
            Authorization: `APPCODE ${APPCODE}`
        }
    });
    return resp.data.showapi_res_body.channelList
}
// getNewsChanels()
export async function getNews(channelId, page = 1, maxResult = 10){
    var resp = await axios.get("http://ali-news.showapi.com/newsList", {
        headers: {
            Authorization: `APPCODE ${APPCODE}`
        },
        params: {
            channelId,
            page,
            maxResult,
            needAllList: false,
            needContent: 1
        }
    });
    return resp.data.showapi_res_body.pagebean; 
}