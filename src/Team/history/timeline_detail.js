import React from 'react';
import './timeline.scss'

class Timelinedetail extends React.Component{

    static defaultProps = {
        title: "연혁",
        text: "연혁 내용",
        date: "2019.01.01",
        year: "2019",
    }

    render(){
        return (
                <div>
                {/* <p>{this.props.year}</p>    */}
                <li className={this.props.align}>  
                    <h1>{this.props.title}</h1>
                    <p>{this.props.text}</p>
                    <p>{this.props.date}</p>
                </li>
                </div>
        );
    }
}

export default Timelinedetail;