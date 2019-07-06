import React from "react";
import { BrowserRouter as NavLink } from "react-router-dom";

class NavItem extends React.Component {
    render() {
        return (
                <li
                    className={
                        this.props.active ? "nav-item active" : "nav-item"
                    }
                >
                    <NavLink className="nav-link" to={this.props.url}>{this.props.text}</NavLink>
                </li>
        );
    }
}

export default NavItem;
