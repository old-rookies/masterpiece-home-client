import React from 'react';
import './explain.scss'
import Card from './card';

class Explain extends React.Component{
    render(){
        return (
        <div className="section bg_exp">
            <div className="container">
				<Card />
            </div> 
        </div>
        )
    }
}

export default Explain;