import React from 'react';
import './card.scss'

class Card extends React.Component{

    static defaultProps = {
        title: "서비스 특징 제목",
        content: "서비스 특징 내용",
    };

    render(){
        return (
        <div className="col-md-4">
            <div className="exp-card p-5" id={this.props.num}>
                {/* <h1>{this.props.title}</h1>
                <p>{this.props.content}</p> */}
            </div>
        </div>
        );
    }
}

export default Card;