import React, { Component } from 'react';
import {Icon} from 'antd-mobile';
import './home.scss';
import MySwiper from './MySwiper';
import axios from 'axios';

export default class Home extends Component {
    render() {
        return (
            <div className="home-wrap">
                <div className="logo"><figure>T</figure></div>
                <header className="search">
                    <input type="text" placeholder="请输入关键字"/>
                </header>
                <section className="main">
                    <MySwiper/>
                    
                </section>
            </div>
        )
    }
}
