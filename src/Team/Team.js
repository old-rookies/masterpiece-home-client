import React from 'react';
import './Team.scss'
import Title from './title/title';
import Intro from './intro/intro';
import Member from './member/member';
import History from './history/history';

class Team extends React.Component{
    render(){
        return (
            <div>
                <Title />
                <Intro />
                <Member />
                <History />
            </div>
        );
    }
}

export default Team;