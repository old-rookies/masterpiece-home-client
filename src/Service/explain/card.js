import React from 'react';
import './card.scss'

class Card extends React.Component{

    static defaultProps = {
        title: "서비스 특징 제목",
        content: "서비스 특징 내용",
    };

    render(){
        return (
		<div className="row">	
			<div className="col-md-4">
				<div className="exp-card p-5" id="img1">
					<div className="text-box">
						<h1>상호작용&amp;퍼포먼스</h1>
						<p>
							작품 배치<br></br>
							조명 · 액자 변경<br></br>
							조명 on/off 조절<br></br>
						</p>
						<h2>나만의 전시공간을 만들어보자!</h2>
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="exp-card p-5" id="img2">
					<h1>WEB VR</h1>
					<h2>
						추가적인 다운 NO!<br></br>
						브라우저 자체에서 즐길 수 있는<br></br>
						WEB VR<br></br>
					</h2>
					<p>⌜A-Frame⌟ 오픈소스 프레임워크 사용</p>
				</div>
			</div>
			<div className="col-md-4">
				<div className="exp-card p-5" id="img3">
					<h1>현실감있는 질감표현</h1>
					<h2>
						붓 터치 자국표혐<br></br>
						광원에 다른 질감표현<br></br>
						벽면 질감 포현<br></br>
					</h2>
					<p>원화의 질감을 입체적으로 느껴보세요!</p>
				</div>
			</div>
		</div>
        );
    }
}

export default Card;