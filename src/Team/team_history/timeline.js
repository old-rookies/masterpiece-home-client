import React from 'react';
import Timelinedetail from './timeline_detail'
import './timeline.scss'

class Timeline extends React.Component{
    render(){

        let timelinedetail = [
            { title: "연혁1", text: "연혁 내용 입니다.", date: "2019.01.01", year:"2019" },
            { title: "연혁2", text: "연혁 내용 입니다.", date: "2019.02.01", year:"2019" },
            { title: "연혁3", text: "연혁 내용 입니다.", date: "2019.03.01", year:"2019" },
            { title: "연혁4", text: "연혁 내용 입니다.", date: "2019.04.01", year:"2019" },
        ];

        return (
            <div class="timeline">
                <ul>
                {timelinedetail.map((value, index) => {

                    if(index % 2 == 0){
                        var aligninfo = "left"
                    }
                    else {
                        var aligninfo = "right"
                    }

                return (
                    <Timelinedetail
                        key={index}
                        align={aligninfo}
                        title={value.title}
                        text={value.text}
                        date={value.date}
                        year={value.year}
                    />
                    );
                })}
                </ul>
          </div>
        );
    }
}

export default Timeline;