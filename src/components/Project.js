import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import ReactMarkdown from 'react-markdown';

import particleConfig from '../particle-config.json';
import Header from './Header.js';

export default class Project extends Component{

	constructor(props){
		super(props);

		this.state = {
			isLoading: true,
		}
	}

	filterSelected = () => {
		var [selectedProject] = this.props.projects.filter(p => p.name == this.props.match.params.name);
		this.setState({
			project: selectedProject
		}, () => this.setState({isLoading: false}))
	}

	componentDidUpdate(oldProps){
		const newProps = this.props;
		if(oldProps.projects !== newProps.projects){
			this.setState({
				projects: newProps.projects
			}, () => this.filterSelected())
		}
	}

	componentDidMount(){
		window.scrollTo(0,0);
		this.props.projects ? this.filterSelected() : null;
	}

	render(){

		const headerStyle = {
			minHeight: 450,
			height: 450,
			backgroundImage: `url(${!this.state.isLoading ? this.state.project.img : null})`
		}

		return(
			<React.Fragment>
				
				<Header active='projects'/>

				<div className='home-start-wrapper subpage-wrapper'>
					<div className='home-start-center'>
						<div className='home-start-text subpage-text'>
							{!this.state.isLoading ? <Link style={{'textDecoration': 'none'}} to={`/projects/${this.state.project.category}`}><h6 className='category-heading'>{this.state.project.category}</h6></Link> : null}
							{!this.state.isLoading ? <h1 className='heading'>{this.state.project.friendlyName}</h1> : null}
						</div>
					</div>
				</div>
				<div id="top" style={headerStyle} className="home-start-lines project-header-image">
                    {this.state.isLoading ? <Particles width='100%' height={450} params={particleConfig}/> : null /*<img className='project-header-image' src={this.state.project.img}/>*/}
				</div>
				
				{!this.state.isLoading ?
				(<div style={{height: 800}}>
					<div className='project-first-section'>
						<div>
							<span>Year</span>
							<span>{this.state.project.year}</span>
						</div>
						
						<div>
							<span>Site</span>
							<span>{this.state.project.url}</span>
						</div>
					</div>

					<div className='project-tech-section'>
						
						{this.state.project.frontEnd.length > 0 ?
							(
								<div>
									{this.state.project.frontEnd.map((item) => {
										return(
											<div>
												<span>{item}</span>
											</div>
										)
										})
									}
								</div>
							) : null
						}

						{this.state.project.backEnd.length > 0 ?
							(
								<div>
									{this.state.project.backEnd.map((item) => {
										return(
											<div>
												<span>{item}</span>
											</div>
										)
										})
									}
								</div>
							) : null
						}

						{this.state.project.devOps.length > 0 ?
							(
								<div>
									{this.state.project.devOps.map((item) => {
										return(
											<div>
												<span>{item}</span>
											</div>
										)
										})
									}
								</div>
							) : null
						}

					</div>

					<ReactMarkdown source={this.state.project.mdBody} escapeHtml={false} />

				</div>)

				: null}

			</React.Fragment>
		);
	}
}