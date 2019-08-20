import React from "react";
import { NavLink } from "react-router-dom";

class NavItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            active : false
        }; 
    }
    render(){        
        return (
            <li className="nav-item">
                <NavLink className={"nav-link " + (this.state.active ? "active" : "")} to={this.props.url} activeClassName="active">
                    {this.props.text}
                </NavLink>
            </li>
        );
    }
}

export default NavItem;
