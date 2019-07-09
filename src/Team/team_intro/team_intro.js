import React from 'react';
import './team_intro.scss'
import Team_intro_summary from './team_intro_summary'
import Team_intro_detail from './team_intro_detail'

class Team_intro extends React.Component{
    render(){
        return (
        <div class="row team_sec bg_int">
            <Team_intro_summary/>
            <Team_intro_detail/>
        </div>
        );
    }
}

export default Team_intro;