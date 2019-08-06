import React from 'react';
import './press_gisa.scss';
const gisa=[
    "https://new.syu.ac.kr/blog/삼육人-학생-스타트업-마스터피스-정부지원-창업비-4/"
];
class Press_gisa extends React.Component{
    render(){
        return(
            <div className="press_sec press_gisa">
                <div className="press_gisa_title"><h3>언론보도</h3></div>
                <ul>
                    <li><p><a href="https://new.syu.ac.kr/blog/삼육人-학생-스타트업-마스터피스-정부지원-창업비-4/">학생 스타트업 마스터피스, 정부지원 창업비 4천만원 수주</a></p></li>
                </ul>
            </div>
        ); 
    }
}

export default Press_gisa;