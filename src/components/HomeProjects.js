import React, { Component } from 'react';

import {projects} from '../projects';

class HomeProjects extends Component{

    constructor(props){
        super(props)

        this.state = {
            projects: projects,
            selected: null
        }
    }

    render(){
        return(
            <div id="projects">
                <ul className="projects-filter">
                    <li onClick={() => {this.setState({selected: null})}} className={this.state.selected == null ? "clicked" : null}>All</li>
                    <li onClick={() => this.setState({selected: "web"})} className={this.state.selected == "web" ? "clicked" : null}>Web</li>
                    <li onClick={() => this.setState({selected: "backend"})} className={this.state.selected == "backend" ? "clicked" : null}>Backend</li>
                </ul>

                <div className="projects-wrapper">
                    {this.state.projects ? this.state.projects.projects.reverse().map((project) => {
                        if(project.type == this.state.selected || this.state.selected == null){
                            return(
                                <div key={project.id} className="project-card">
                                    <div className="project-overlay">
                                        <span className="project-name">{project.name}</span>
                                        <span className={"project-framework " + project.framework}>{project.framework}</span>
                                    </div>
                                    <img src={project.img}/>
                                </div>
                            );
                        }
                    })
                    : null}
                </div>
            </div>
        );
    }
}

export default HomeProjects;