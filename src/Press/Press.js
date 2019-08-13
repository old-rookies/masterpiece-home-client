import React from 'react';
import Press_title from './press_title/press_title';
import Press_slider from './press_slider/press_slider';
import Press_gisa from './press_gisa/press_gisa';
import './press.scss'
class Press extends React.Component{
    render(){
        let list = [
            { title : '기사 제목 1' , date : new Date() , press_nm : '신문사1'},
            { title : '기사 제목 1' , date : new Date() , press_nm : '신문사1'},
            { title : '기사 제목 1' , date : new Date() , press_nm : '신문사1'},
        ]

        return (
            <div>
                <Press_title/>
                <Press_slider/>               
                <Press_gisa/>
          </div>

        );

    }
}

export default Press;