import React from 'react';

class Intro_detail extends React.Component{

    static defaultProps = {
        Intro_detail: "팀업 배경에 대한 상세한 소개"
    };

    render(){
        return (
        <div className="col-md-6 int_det">
            <ul>
                <li>{this.props.Intro_detail}</li>
                <li>{this.props.Intro_detail}</li>
                <li>{this.props.Intro_detail}</li>
                <li>{this.props.Intro_detail}</li>
                <li>{this.props.Intro_detail}</li>
            </ul>
        </div>
        );
    }
}

export default Intro_detail;