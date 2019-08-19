import React from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";

import axios from 'axios';

import './Nav.scss';

import logo from './image/logo.png';

// 공통 사용될 Nav 함수
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOnTop : true,
            navItems : []
        };
    }
    
    componentDidMount(){
        // component 로드 후 실행됨
        document.addEventListener('scroll', () => {
            const isOnTop = window.scrollY < 56;
            if (isOnTop !== this.state.isOnTop) {
                this.setState({ isOnTop });
            }
        });

        let uri = "http://ec2-3-17-161-174.us-east-2.compute.amazonaws.com:3000/api/corp/menu";
        // let uri = 'http://localhost:3000/api/corp/menu';

        axios.get(uri)
        .then(result =>{
            this.setState(prevState => ({
                navItems : result.data.data.menu
            }));
            console.log(result);
        })
        .catch(err =>{
            console.log('axios called fail');
            console.log(err);
        });
    }

    render() {


        // 자바스크립트 끝
        return (
            <nav className={ "navbar navbar-expand-lg fixed-top " + (this.state.isOnTop ? "navbar-dark" : " navbar-dark bg-dark") }>
                <NavLink className="navbar-brand" exact to="/">
					<img src={logo} alt="Masterpiece" className="nav-logo"></img>
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
                        {this.state.navItems.map((value, index) => {
                            return (
                                <NavItem
                                //  반복되는 요소를 구분짓기 위해서 기본으로 필요한 값
                                //  여기서 index는 배열에서 value가 몇번째 요소인지 나타내는 값
                                    key={index}
                                    url={value.location}
                                    text={value.displayNM}
                                    // active={value.active}
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
