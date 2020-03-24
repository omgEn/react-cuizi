// api调用接口
import axios from 'axios';

export const myswiper = ()=>{
    axios.get("https://shopapi.smartisan.com/mobile/home").then((res)=>{
        console.log(res.data.data[0])
        return res.data.data[0];
    })
}