import React from 'react';
import Loadable from 'react-loadable';

// var App = Loadable({
//     loader:()=>import("../App"),
//     loading:()=><div>loading...</div>
// });

var Login = Loadable({
    loader:()=>import("../component/login"),
    loading:()=><div>loading...</div>
});

var Home = Loadable({
    loader:()=>import("../component/home"),
    loading:()=><div>loading...</div>
});

var Cart= Loadable({
    loader:()=>import("../component/cart"),
    loading:()=><div>loading...</div>
});

var Category= Loadable({
    loader:()=>import("../component/category"),
    loading:()=><div>loading...</div>
});

var NotFound= Loadable({
    loader:()=>import("../component/notfound"),
    loading:()=><div>loading...</div>
});

var User= Loadable({
    loader:()=>import("../component/user"),
    loading:()=><div>loading...</div>
});

export const routes = [
    {
        path:'/home',
        component:Home
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/user',
        component:User
    },
    {
        path:'/404',
        component:NotFound
    }
]