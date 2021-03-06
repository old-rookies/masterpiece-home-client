import React from 'react';

class Member_info extends React.Component{

    static defaultProps = {
        image_url: "./member_profile/bonobono.jpg",
        name: "이름",
        position: "포지션",
        text: "본인 설명 텍스트"
    };

    render(){
        return (
        <div className="member_info_box">
            <img src={this.props.image_url} alt="profile_image" className="member_profile_img" />
            <ul>
                <li>
                    <span className="member_name">{this.props.name}</span><span>{this.props.position}</span>
                </li>
                <li>
                    {this.props.text}
                </li>
            </ul>
        </div>
        );
    }
}

export default Member_info;