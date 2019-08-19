import React from 'react';
import './prototype.scss'
import MySwiper from './swiper';

class Prototype extends React.Component{
    render(){
        return (
        <div className="section bg_proto">
            <h1>마스터피스 #세상의 모든 영감을 담다</h1>
            <MySwiper />
        </div>
        )
    }
}

export default Prototype;