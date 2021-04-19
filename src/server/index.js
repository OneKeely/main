import http from './http';
const baseURL = 'http://api.cms.liulongbin.top/api';
const loop = 'http://152.136.97.184:3000';
const search = 'http://152.136.97.184:5001'
// const phoneurl=''
export const listObj = {
    //轮播图
    getLoopNews:() => http.get(`${loop}/getlunbo`),
    // 新闻
    getnews:() => http.get(`${baseURL}/getnewslist`),
    // 详情
    newsDetails: newid => http.get(`${baseURL}/getnew/${newid}`),
    // 图文咨讯
    getphoto:(photoid) => http.get(`${baseURL}/getimages/${photoid}`),
    // 导航
    getnav:()=>http.get(`${baseURL}/getimgcategory`),
    //上传评论
    discuss:(artid,content) => http.post(`${baseURL}/postcomment/${artid}`,{content:content}),
    //获取评论
    getdiscuss:(artid) =>http.get(`${baseURL}/getcomments/${artid}?pageindex=1`),
    // 搜索
    grabble:(cont) => http.get(`${search}/search/${cont}`),
    //获取不确定数据
    getnavDate:() => http.get("http://localhost:3001/allData"),
    // 获取商品列表
    getgoods:() => http.get(`${baseURL}/getgoods?pageindex=1`)
}