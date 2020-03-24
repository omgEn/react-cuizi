import React from 'react';
import { Redirect } from 'react-router';

var Hoc =(login)=>Com=>{
    return class extends React.Component{
        render(){
            if(login){
                return <><Com {...this.props}/>锤子商城</>
            } else {
                return <Redirect to='/login'/>
            }
        }
    }
}