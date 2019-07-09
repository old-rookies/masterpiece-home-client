import React from 'react';

class Member_info extends React.Component{

    static defaultProps = {
        member_profile_image_url: "./member_profile/bonobono.jpg",
        member_name: "이름",
        member_position: "포지션",
        member_description_text: "본인 설명 텍스트"
    };

    render(){
        return (
        <div class="member_info_box">
            <img src={this.props.member_profile_image_url} alt="profile_image" class="member_profile_img" />
            <ul>
                <li>
                    <sapn class="member_name">{this.props.member_name}</sapn><sapn>{this.props.member_position}</sapn>
                </li>
                <li>
                    {this.props.member_description_text}
                </li>
            </ul>
        </div>
        );
    }
}

export default Member_info;