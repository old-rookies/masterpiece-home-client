import React from 'react';
import './title.scss'
import Title_text from './title_text';
import Comment_text from './comment_text';

class Title extends React.Component{
    render(){
        return (
        <div className="section bg_tit">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="logo2"></div>
						<Title_text/>
						<Comment_text/>
					</div>
					<div className="col-md-6">
						<div className="phone_img"></div>
					</div>
				</div>
			</div>
        </div>
        )
    }
}

export default Title;