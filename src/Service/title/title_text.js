import React from 'react';

class Title_text extends React.Component{

    static defaultProps = {
        title: 'service_title'
    };

    render(){
        return (
        <div className="title_box">
            <h1>{this.props.title}</h1>
        </div>
        )
    }
}

export default Title_text;