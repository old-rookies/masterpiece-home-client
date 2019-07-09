import React from 'react';
import './team_history.scss'
import Timeline from './timeline'

class Team_history extends React.Component{
    render(){
        return (
        <div class="team_sec bg_his">
            <h1>History</h1>
            <Timeline/>
            team introduction
        </div>
        );
    }
}

export default Team_history;