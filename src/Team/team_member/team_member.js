import React from 'react';
import './team_member.scss'
import Member_info from './member_info'

class Team_member extends React.Component{
    render(){
        return (
        <div class="team_sec bg_mem">
            <h1>Memeber</h1>
            <Member_info/>
            <Member_info/>
            member img, name, text
        </div>
        );
    }
}

export default Team_member;