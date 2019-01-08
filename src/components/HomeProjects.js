import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import firebase from './firebase';

export default class HomeProjects extends Component{

	constructor(props){
		super(props);

		this.state = ({
			selected: null
		})
	}

	componentDidMount(){
		firebase.firestore().collection('projects').get()
			.then((snapshot) => {
				this.setState({
					snapshot: snapshot
				}, () => this.intoArray())
			})
			.catch((err) => {
				console.log('Error', err);
			})
	}

	intoArray = () => {
		var arr = [];
		this.state.snapshot.forEach((project) => {
			arr.push(project.data());
		})
		this.setState({
			projects: arr.reverse()
		})
	}

	render(){
		return(
			<div className='home-projects container'>
				<h3 className='section-header'>Latest Work</h3>
				
				<div className='projects-list-wrapper'>
					{this.state.projects ? this.state.projects.map((project, index) => {
						return(
							<div key={project.id} className='project-card'>
								<Link to='/'>
									<img src={project.img}/>
								</Link>
							</div>
						)
					}) : null}
				</div>
			</div>
		);
	}
}