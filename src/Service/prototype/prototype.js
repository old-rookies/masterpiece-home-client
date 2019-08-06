import React from 'react';
import './prototype.scss'
import MySwiper from './swiper';

class Prototype extends React.Component{
    render(){
        return (
        <div className="section bg_proto">
            <h1>Prototype</h1>
            <MySwiper />
        </div>
        )
    }
}

export default Prototype;