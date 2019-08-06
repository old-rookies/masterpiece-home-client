import React from 'react';
import './member.scss'
import Member_info from './member_info'

class Member extends React.Component{
    render(){
        
        let memberinfo = [
            { image_url: "./bsh.jpg", name: "배성현", position: "개발자", text:"안녕하세요" },
            { image_url: "./member_profile/bonobono.jpg", name: "배성현2", position: "개발자2", text:"안녕하세요2" },
            { image_url: "./member_profile/bonobono.jpg", name: "배성현3", position: "개발자3", text:"안녕하세요3" },
        ];


        return (
        <div className="section bg_mem">
            <h1>Memeber</h1>
            {memberinfo.map((value, index) => {
                return (
                    <Member_info
                        key={index}
                        image_url={value.url}
                        name={value.text}
                        position={value.active}
                        text={value.text}
                    />
                );
            })}
            member img, name, text
        </div>
        );
    }
}

export default Member;