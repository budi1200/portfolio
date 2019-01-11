import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';

import particlez from '../particle-config.json';
export default class HomeStart extends Component{

	componentDidMount(){
		console.log(particlez);
	}
	
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
                    <Particles width='100%' height='540' params={
                    {
  "particles": {
    "number": {
      "value": 90,
      "density": {
        "enable": false,
        "value_area": 300
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "edge",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.6,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 263.73626373626377,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 59.940059940059946,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}}/>    
</div>
			</React.Fragment>
		);
	}
}