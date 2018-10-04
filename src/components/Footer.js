import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component{
    render(){
        return(
            <div className="footer-wrapper">
                <div className="footer">
                    <div>
                        <span>Copyright &#169; {new Date().getFullYear()} Alen Budimir</span>
                    </div>

                    <div className="footer-social">
                        <img src="./assets/img/social/fb_icon.svg"/>
                        <img src="./assets/img/social/instagram_icon.png"/>
                        <img src="./assets/img/social/twitter_icon.svg"/>
                        <img src="./assets/img/social/github_icon.png"/>
                    </div>

                </div>
            </div>
        );
    }
}

export default Footer;