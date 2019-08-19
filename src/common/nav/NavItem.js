import React from "react";
import { NavLink } from "react-router-dom";

class NavItem extends React.Component {
    render() {        
        console.log(this.props);
        return (
            <li className="nav-item">
                <NavLink className="nav-link" to={this.props.url} activeClassName="active">
                    {this.props.text}
                </NavLink>
            </li>
        );
    }
}

export default NavItem;
