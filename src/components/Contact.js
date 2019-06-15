import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

export default class Contact extends Component{
	render(){
		return(
			<React.Fragment>
				<Header active='contact'/>

				<div className='home-start-wrapper subpage-wrapper'>
					<div className='home-start-center'>
						<div className='home-start-text subpage-text'>
							Get in touch! Lets make <br/> something together.
						</div>
					</div>
				</div>

				<div className='container'>
					<div className='contact-form-wrapper'>
						<form className='contact-form'>
							<label for='form_name'>Name</label>
							<input id='form_name' type='text' placeholder='Enter your name'/>

							<label for='form_email'>Email Address</label>
							<input id='form_email' type='email' placeholder='Enter your email address'/>

							<label for='form_message'>Message</label>
							<textarea id='form_message' placeholder='Enter your message'></textarea>
							<br/>
							<button type="submit" className='home-start-button'>Submit</button>
						</form>
					</div>
				</div>

			</React.Fragment>
		);
	}
}