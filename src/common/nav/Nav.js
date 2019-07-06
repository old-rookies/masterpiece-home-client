import React from "react";
import { BrowserRouter as Router,Link } from "react-router-dom";
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
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Router>
                    <Link className="navbar-brand" to="/">
                      Navbar
                    </Link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon" />
                    </button>

                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav mr-auto">
                            {navItems.map((value, index) => {
                                return (
                                    <NavItem
                                        url={value.url}
                                        text={value.text}
                                        active={value.active}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                </Router>
            </nav>
        );
    }
}

export default Nav;
