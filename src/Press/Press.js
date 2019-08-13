import React from 'react';
import Press_title from './press_title/press_title';
import Press_slider from './press_slider/press_slider';
import Press_gisa from './press_gisa/press_gisa';
import './press.scss'
class Press extends React.Component{
    render(){
        let list = [
            { title : '기사 제목 1' , date : new Date() , press_nm : '신문사1'},
            { title : '기사 제목 2' , date : new Date() , press_nm : '신문사2'},
            { title : '기사 제목 3' , date : new Date() , press_nm : '신문사3'},
            { title : '기사 제목 4' , date : new Date() , press_nm : '신문사4'},
            { title : '기사 제목 5' , date : new Date() , press_nm : '신문사5'},
        ]

        return (
            <div>
                <Press_title/>
                <Press_slider/>               
                <Press_gisa items={ list } />
          </div>

        );

    }
}

export default Press;