import React from 'react';
import Timelinedetail from './timeline_detail'
import './timeline.scss'
import axios from 'axios';

class Timeline extends React.Component{
	constructor(props) {
        super(props);
        this.state = {
            timelinedetail : []
        };
    }

	componentDidMount(){
		let uri = "http://ec2-3-17-161-174.us-east-2.compute.amazonaws.com:3000/api/corp/team_history";

		axios.get(uri)
        .then(result =>{
			console.log(result);
            this.setState(prevState => ({
                timelinedetail : result.data.data.w_team_history
            }));
            // console.log(result);
        })
        .catch(err =>{
            console.log('axios called fail');
            console.log(err);
		});
	}

    render(){
        // let timelinedetail = [
        //     { title: "연혁1", text: "연혁 내용 입니다.", date: "2019.01.01", year:"2019" },
        //     { title: "연혁2", text: "연혁 내용 입니다.", date: "2019.02.01", year:"2019" },
        //     { title: "연혁3", text: "연혁 내용 입니다.", date: "2019.03.01", year:"2019" },
        //     { title: "연혁4", text: "연혁 내용 입니다.", date: "2019.04.01", year:"2019" },
        // ];
			
        return (
            <div className="timeline">
                <ul>
                {this.state.timelinedetail.map((value, index) => {

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
                        content={value.content}
                        date={value.date}
                        icon_url={value.icon_url}
                    />
                    );
                })}
                </ul>
          </div>
        );
    }
}

export default Timeline;