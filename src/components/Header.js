import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

class Header extends Component{
    render(){
        return(
            <div id="header" className="header-wrapper">
                <img height="40" src='./assets/img/logo.svg'/>

                <span style={{color: "white", fontSize: "1.2rem", fontWeight: "bold"}}>! Work In Progress !</span>

                <div>
                    <ul>
                        <li><HashLink smooth to='/#header'>Domov</HashLink></li>
                        <li><HashLink smooth to='/#projects'>Projekti</HashLink></li>
                        <li><Link to='/kontakt'>Kontakt</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;