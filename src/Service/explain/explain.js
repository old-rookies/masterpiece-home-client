import React from 'react';
import './explain.scss'
import Card from './card';

class Explain extends React.Component{
    render(){

        let cardtext = [
            {title: "WEB VR", content: "WEB VR에 대한 설명 100자 이내"},
            {title: "다양한 물리적 퍼포먼스", content: "상호작용과 퍼포먼스에 대한 설명 100자 이내"},
            {title: "뛰어난 질감 표현", content: "질감표현에 대한 설명 100자 이내"},
        ];

        return (
        <div className="section bg_exp">
            <div className="container">
                <div className="row">
                    {cardtext.map((value, index) => {
                    return (
                        <Card
                            key={index}
                            title={value.title}
                            content={value.content}
                        />
                        );
                    })}
                </div>
            </div> 
        </div>
        )
    }
}

export default Explain;