import React from 'react';



class Team_title_text extends React.Component{

    static defaultProps = {
        team_title: 'Masteriece'
    };

    render(){
        return (
        <div class="title_box">
            <h1>{this.props.team_title}</h1>
        </div>
        )
    }
}

export default Team_title_text;