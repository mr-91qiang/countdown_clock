// const information = document.getElementById('info')
// information.innerText = `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`

const deadline = '2023-03-24';

const monthFomat = 1000 * 60 * 60 * 24 * 31
const dayFomat = 1000 * 60 * 60 * 24
const hourFomat = 1000 * 60 * 60
const minuteFomat = 1000 * 60
const secondFomat = 1000

function getTimeRemaining(endtime) {

    const total = Date.parse(endtime) - Date.parse(new Date());
    const month = Math.floor(total / monthFomat)
    const day = Math.floor(total  / dayFomat)
    const hour = Math.floor(total % monthFomat % dayFomat / hourFomat)
    const minute = Math.floor(total % monthFomat % dayFomat % hourFomat / minuteFomat)
    const second = Math.floor(total % monthFomat % dayFomat % hourFomat % minuteFomat / secondFomat)
    return {
        month,
        day,
        hour,
        minute,
        second,
    };
}

setInterval(() => {
    const obj = getTimeRemaining(deadline)

    const monthele = document.getElementById("on")
    monthele.innerHTML =`<span class="big">` + obj.day+`</span> 天 <span class="big">` + obj.hour+`</span> 小时 <span class="big">`+obj.minute+`</span>  分钟 <span class="big">`+obj.second+"</span> 秒"
    // const dayele = document.getElementById("day")
    // dayele.innerText = obj.day+"天"
    // const hourele = document.getElementById("hour")
    // hourele.innerText = obj.hour+"小时"
    // const minuteele = document.getElementById("minute")
    // minuteele.innerText = obj.minute+"分钟"
    // const secondele = document.getElementById("second")
    // secondele.innerText = obj.second+"秒"
}, 1000);


