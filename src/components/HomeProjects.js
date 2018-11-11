import React, { Component } from 'react';
import firebase from './firebase';

class HomeProjects extends Component{

    constructor(props){
        super(props)

        this.state = {
            selected: null
        }
    }
    
    componentDidMount(){
        firebase.firestore().collection('projects').get()
            .then((snapshot) => {
                this.setState({
                    snapshot: snapshot
                }, () => this.intoArray())
            })
            .catch((err) => {
                console.log("Error", err);
            })
    }

    intoArray = () => {
        var arr = [];
        this.state.snapshot.forEach((project) => {
            arr.push(project.data());
        })
        this.setState({
            projects: arr
        })
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
                    {this.state.projects ? this.state.projects.reverse().map((project) => {
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