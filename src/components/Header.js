import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <div className="header-wrapper">
                <img height="40" src='./assets/img/logo.svg'/>

                <span style={{color: "white", fontSize: "1.2rem", fontWeight: "bold"}}>! Work In Progress !</span>

                <div>
                    <ul>
                        <li>Domov</li>
                        <li>Projekti</li>
                        <li>O Meni?</li>
                        <li>Kontakt</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;