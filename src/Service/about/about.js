import React from 'react';
import './about.scss'
import About_left from './about_left'
import About_right from './about_right'

class About extends React.Component{
    render(){
        return (
        <div className="section bg_abt">
            <h1 className="abt_title mb-5">"ABOUT MASTERPIECE"</h1>
            <div className="container">
                <div className="row">
                    <About_left/>
                    <About_right/>
                </div>
            </div>
        </div>
        )
    }
}

export default About;