import React, { Component } from 'react';
import Header from './Header';
import HomeStart from './HomeStart';
import HomeProjects from './HomeProjects';
import Footer from './Footer';

export default class Home extends Component{
	render(){
		return(
			<React.Fragment>
				<Header active='portfolio'/>

				<HomeStart/>

				<HomeProjects/>

				<Footer/>
			</React.Fragment>
		);
	}
}