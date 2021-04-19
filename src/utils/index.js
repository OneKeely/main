export const gettime = (time) =>{
    let y = time.getFullYear();
    let mon = time.getMonth() + 1;
    let day = time.getDate();
    let h = time.getHours().toString();
    let m = time.getMinutes().toString();
    let s = time.getSeconds().toString();
    return `${y}-${mon}-${day}/${h}：${m}：${s}`
}