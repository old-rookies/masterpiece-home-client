import React from 'react';

class Team_intro_detail extends React.Component{

    static defaultProps = {
        team_intro_detail: "팀업 배경에 대한 상세한 소개"
    };

    render(){
        return (
        <div class="col-md-6 int_det">
            <ul>
                <li>{this.props.team_intro_detail}</li>
                <li>{this.props.team_intro_detail}</li>
                <li>{this.props.team_intro_detail}</li>
                <li>{this.props.team_intro_detail}</li>
                <li>{this.props.team_intro_detail}</li>
            </ul>
        </div>
        );
    }
}

export default Team_intro_detail;