import React from 'react';
import './Team.scss'
import Team_title from './team_title/team_title';
import Team_intro from './team_intro/team_intro';
import Team_member from './team_member/team_member';
import Team_history from './team_history/team_history';

class Team extends React.Component{
    render(){
        return (
            <div>
                <Team_title />
                <Team_intro />
                <Team_member />
                <Team_history />
            </div>
        );
    }
}

export default Team;