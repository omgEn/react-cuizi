import React from 'react';
import './App.css';
import {Route,Switch,Redirect,NavLink} from 'react-router-dom';
import {routes} from './router';
import { Icon } from 'antd-mobile';

function App() {
  return (
    <div className="App">
      <Switch>
          {
              routes.map((item)=>{
                  return <Route key={item.path} path={item.path} component={item.component}/>
              })
          }
          <Redirect from='/' to='/home' exact />
          <Redirect to="/404" exact />
      </Switch>
      <ul className="footer">
        <li><NavLink to='/home'><Icon type="cross-circle" size="sm"/><h5>首页</h5></NavLink></li>
        <li><NavLink to='/category'><Icon type="cross-circle" size="sm"/><h5>分类</h5></NavLink></li>
        <li><NavLink to='/cart'><Icon type="cross-circle" size="sm"/><h5>购物车</h5></NavLink></li>
        <li><NavLink to='/user'><Icon type="cross-circle" size="sm"/><h5>个人中心</h5></NavLink></li>
      </ul>
     
    </div>
  );
}

export default App;
