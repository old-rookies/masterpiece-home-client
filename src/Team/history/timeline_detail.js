import React from 'react';
import './timeline.scss'
import lion from './image/lionstudio.png'

class Timelinedetail extends React.Component{
	
    static defaultProps = {
        title: "연혁",
        content: "연혁 내용",
		date: "2019.01.01",
		icon_url: {lion},
	}

    render(){
		var default_url = lion; 

        return (
                <div>
                {/* <p>{this.props.year}</p>    */}
                <li className={this.props.align}>  
                    <h1>{this.props.title}</h1>
                    <p>{this.props.content}</p>
                    <p>{this.props.date}</p>
					<img src={ this.props.icon_url !== null ? this.props.icon_url : default_url } alt={this.props.title}></img>
					{/* <img src={this.props.icon_url} alt="history icon"></img> */}
                </li>
                </div>
        );
    }
}

export default Timelinedetail;