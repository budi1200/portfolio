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
                        <a href="https://www.facebook.com/alenbudimir20" target="_blank"> <img src="./assets/img/social/fb_icon.svg"/> </a>
                        <a href="https://www.instagram.com/alenbudimir/" target="_blank"> <img src="./assets/img/social/instagram_icon.png"/> </a>
                        <a href="https://github.com/budi1200" target="_blank"> <img src="./assets/img/social/github_icon.png"/> </a>
                    </div>

                </div>
            </div>
        );
    }
}

export default Footer;