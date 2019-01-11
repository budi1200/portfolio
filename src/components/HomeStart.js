import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';

import particleConfig from '../particle-config.json';

export default class HomeStart extends Component{
	render(){
		return(
			<React.Fragment>
				<div className='home-start-wrapper'>
					<div className='home-start-center'>
						<div className='home-start-text'>
							I make web and mobile apps.
						</div>
						<Link className='btn' to='/contact'>
							Get a quote
						</Link>
					</div>
				</div>
				<div id="FirstScreen-wrapper" className="home-start-lines">
                    <Particles width='100%' height='540' params={particleConfig}/>    
				</div>
			</React.Fragment>
		);
	}
}