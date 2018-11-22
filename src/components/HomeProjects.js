import React, { Component } from 'react';
import firebase from './firebase';
import Lightbox from './Lightbox';

class HomeProjects extends Component{

    constructor(props){
        super(props)

        this.state = {
            selected: null,
            isVisible: false,
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
            projects: arr.reverse()
        })
    }

    lightbox = (action, index) => {
        switch(action){
            case "open":
                this.setState({
                    isVisible: true,
                    selectedCard: this.state.projects[index]
                })
                document.body.style.overflow = "hidden";
                console.log(index);
                break;
            case "close":
                this.props.lightboxToggle("close");
                this.setState({
                    isVisible: false,
                    selectedCard: ''
                })
                document.body.style.overflow = "inherit";
                break;
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
                    {this.state.projects ? this.state.projects.map((project, index) => {
                        if(project.type == this.state.selected || this.state.selected == null){
                            return(
                                <div key={project.id} className="project-card" onClick={() => this.lightbox("open", index)}>
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
                <Lightbox isVisible={this.state.isVisible} lightbox={this.lightbox} data={this.state.selectedCard}/>
            </div>
        );
    }
}

export default HomeProjects;