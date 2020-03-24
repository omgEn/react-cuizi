import React, { Component } from 'react';
import './category.scss';

export default class Category extends Component {
    constructor(props){
        super(props);
        this.state={
            firstList:[]
        }
    }
    componentDidMount(){
        this.getData();   
    }
    componentDidUpdate(){
        this.getData();
    }
    getData(){
        fetch("https://shopapi.smartisan.com/mobile/classify").then((res)=>res.json()).then((res)=>{
            console.log(res.data);
            this.setState=({
                firstList:res.data
            });
        })
    }
    render() {
        console.log(this.state.firstList)
        return (
            <div className="category-wrap">
                <div className="search">
                    <input type="text" placeholder="请输入关键字"/>
                </div>
                <div className="category-container clearfix">
                    <section className="left-wrap">
                        <ul className="first-list">
                            <li>手机数码</li>
                            <li></li>
                        </ul>
                    </section>
                    <section className="right-wrap">dd</section>
                </div>
            </div>
        )
    }
}
