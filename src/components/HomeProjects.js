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
			<div className="arlo_tm_section relative" id="portfolio">
				<div className="arlo_tm_portfolio_wrapper_all">
					{/* PORTFOLIO FILTER */}
					<div className="arlo_tm_second_portfolio">
						<div className="container">
							<div className="arlo_tm_portfolio_wrap">
								<div className="arlo_tm_title_holder portfolio">
									<h3>Projects</h3>
									<span>Check out my latest projects</span>
								</div>
								<div ref='titles' className="arlo_tm_portfolio_titles">
									<span ref='cat' className='work__cat'></span>
								</div>
								{/*<ul className="arlo_tm_portfolio_filter">
									<li><a href="#" className="current" data-filter="*">All</a></li>
									<li><a href="#" data-filter=".design">Frontend</a></li>
									<li><a href="#" data-filter=".photography">Backend</a></li>
									<li><a href="#" data-filter=".development">Something</a></li>
								</ul>*/}
								<ul className="arlo_tm_portfolio_list gallery_zoom">
									{this.state.projects ? this.state.projects.map((project, index) => {
										return(
											<li key={index} className={project.category}>
												<div className="entry arlo_tm_portfolio_animation_wrap" data-title={project.friendlyName} data-category={project.category}>
													<Link to='/'>
														<img src={project.img}/>
														<div className="arlo_tm_portfolio_image_main project_title" data-img-url={project.img}>
															<span>{project.friendlyName}</span>
														</div>
													</Link>
												</div>
											</li>
										)
									}) : null}
								</ul>
							</div>
						</div>
					</div>
					{/* /PORTFOLIO FILTER */}
				</div>
			</div>
		)
	}
}