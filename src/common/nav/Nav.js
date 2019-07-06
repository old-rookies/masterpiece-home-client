import React from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";



// 공통 사용될 Nav 함수
class Nav extends React.Component {
    render() {
        let navItems = [
            { url: "service", text: "Service", active: true },
            { url: "team", text: "Team", active: false },
            { url: "press", text: "Press", active: false },
            { url: "contact", text: "Contact", active: false }
        ];

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" exact to="/">
                    Navbar
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
