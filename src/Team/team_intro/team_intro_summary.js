import React from 'react';

class Team_intro_summary extends React.Component{

    static defaultProps = {
        team_intro_summary: '팀업 배경에 대한 소개'
    };

    render(){
        return (
        <div class="col-md-6 int_sum">
            <h2>{this.props.team_intro_summary}</h2>
        </div>
        );
    }
}

export default Team_intro_summary;