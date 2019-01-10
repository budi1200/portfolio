import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

export default class Contact extends Component{
	render(){
		return(
			<React.Fragment>
				<Header active='contact'/>

				<div className='home-start-wrapper'>
					<div className='home-start-center'>
						<div className='home-start-text'>
							Get in touch! Lets make <br/> something together.
						</div>
					</div>
				</div>

				<div>
				
				</div>

			</React.Fragment>
		);
	}
}