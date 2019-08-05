import React from 'react';

class Intro_summary extends React.Component{

    static defaultProps = {
        Intro_summary: '팀업 배경에 대한 소개'
    };

    render(){
        return (
        <div className="col-md-6 int_sum">
            <h2>{this.props.Intro_summary}</h2>
        </div>
        );
    }
}

export default Intro_summary;