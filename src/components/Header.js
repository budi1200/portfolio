import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component{
	render(){
		return(
			<div className='header-wrapper'>
				<div className='header-body container'>
					<img className='header-logo' src='./assets/img/logo.svg' height={30}/>
					<div>
						<Link to='/' className={'header-button ' + (this.props.active == 'portfolio' ? 'header-button-active' : null)}>Portfolio</Link>
						<Link to='/skills' className={'header-button ' + (this.props.active == 'skills' ? 'header-button-active' : null)}>Skills</Link>
						<Link to='/contact' className={'header-button ' + (this.props.active == 'contact' ? 'header-button-active' : null)}>Contact</Link>
					</div>
				</div>
			</div>
		);
	}
}