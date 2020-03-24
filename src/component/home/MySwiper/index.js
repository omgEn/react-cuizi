import React, { Component } from 'react'
import Swiper from 'swiper';
import "swiper/css/swiper.css";
import './myswiper.scss';
// import { myswiper } from '../../../api/request';
import axios from 'axios';

export default class MySwiper extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        this.getData();
    }
    componentDidUpdate(){
        //数据变化异步数据回来
        var swiper = new Swiper('.swiper-container',{
            loop: true, // 循环模式选项，
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            }
        });
    }
    getData(){
        axios.get("https://shopapi.smartisan.com/mobile/home").then((res)=>{
            this.setState({
                list:res.data.data[0].list
            })
        })
    }
    render(){  
        console.log(this.state.list);
        return (
            <div className="myswiper">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.list.map((item,index)=>{
                                return  <div className="swiper-slide" key={item.url}>
                                    <img src={item.image}/>
                                </div>
                            })
                        }
                    </div>
                    {/* 滚动条 */}
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
