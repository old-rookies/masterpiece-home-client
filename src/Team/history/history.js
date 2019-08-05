import React from 'react';
import './history.scss'
import Timeline from './timeline'

class History extends React.Component{
    render(){
        return (
        <div className="section bg_his">
            <h1>History</h1>
            <Timeline/>
            team introduction
        </div>
        );
    }
}

export default History;