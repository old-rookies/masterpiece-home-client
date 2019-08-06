import React from 'react';

class About_left extends React.Component{

    render(){
        return (
        <div className="col-md-6 text-left">
            <h1>가상전시회</h1>
            <p>가상 전시회에 대한 설명</p>
            <div className="about_img">전시회 관련 이미지</div>
        </div>
        )
    }
}

export default About_left;