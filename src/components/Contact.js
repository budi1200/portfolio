import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

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
							<label>Name</label>
							<input type='text' placeholder='Enter your name' className='contact-form-input'/>

							<label>Email Address</label>
							<input type='email' placeholder='Enter your email address' className='contact-form-input'/>

							<label>Message</label>
							<textarea placeholder='Enter your message' className='contact-form-input'></textarea>

							<button type="submit" className='btn btn-submit'>Submit</button>
						</form>
					</div>
				</div>

				<Footer/>

			</React.Fragment>
		);
	}
}