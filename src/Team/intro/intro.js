import React from 'react';
import './intro.scss'
import Intro_summary from './intro_summary'
import Intro_detail from './intro_detail'

class Intro extends React.Component{
    render(){
        return (
        <div className="row section bg_int">
            <Intro_summary/>
            <Intro_detail/>
        </div>
        );
    }
}

export default Intro;