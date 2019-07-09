import React from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

import "./Nav.scss";

// 공통 사용될 Nav 함수
class Nav extends React.Component {
    // override
    // function render(){ /* CODE */ return(REACT+HTML); }
    render() {
        // 자바스크립트 시작
        let navItems = [
            { url: "service", text: "Service", active: true },
            { url: "team", text: "Team", active: false },
            { url: "press", text: "Press", active: false },
            { url: "contact", text: "Contact", active: false }
        ];
        // 자바스크립트 끝
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <NavLink className="navbar-brand" exact to="/">
                    Masterpiece
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        {navItems.map((value, index) => {
                            return (
                                <NavItem
                                //  반복되는 요소를 구분짓기 위해서 기본으로 필요한 값
                                //  여기서 index는 배열에서 value가 몇번째 요소인지 나타내는 값
                                    key={index}
                                    url={value.url}
                                    text={value.text}
                                    active={value.active}
                                />
                            );
                        })}
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;
