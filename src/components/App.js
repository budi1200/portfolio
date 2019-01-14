import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import firebase from './firebase';
import '../App.css';

import Home from './Home';
import Contact from './Contact';
import Project from './Project';
import Skills from './Skills';

class App extends Component {

	constructor(props){
		super(props);

		this.state = {
			projects: null
		}
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

	render() {
		return (
			<Switch basename={'/'}>
				<Route exact path={`${process.env.PUBLIC_URL}/`} render={() => <Home projects={this.state.projects}/>}/>
				<Route path={`${process.env.PUBLIC_URL}/skills`} component={Skills}/>
				<Route path={`${process.env.PUBLIC_URL}/projects/:category/:name`} render={(props) => <Project {...props} projects={this.state.projects}/>}/>
				<Route path={`${process.env.PUBLIC_URL}/contact`} component={Contact}/>
			</Switch>
		);
	}
}

export default App;
