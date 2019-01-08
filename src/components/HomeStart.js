import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomeStart extends Component{
	render(){
		return(
			<div className='home-start-wrapper'>
				<div className='home-start-center'>
					<div className='home-start-text'>
						I make web and mobile apps.
					</div>
					<Link className='home-start-button' to='/contact'>
						Get a quote
					</Link>
				</div>
			</div>
		);
	}
}