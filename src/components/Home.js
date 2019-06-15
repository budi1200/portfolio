import React, { Component } from "react";
import HomeProjects from "./HomeProjects";
import moment from 'moment';
import axios from 'axios';

import scriptLoader from 'react-async-script-loader';

class Home extends Component {

	constructor(props){
		super(props);

		this.state = {
			isLoading: true,
			didSubmit: false
		}
	}

	componentDidMount(){
		this.setState({
			isLoading: false
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.target);
		
		fetch('https://formspree.io/alen.budimir20@gmail.com', {
			method: 'POST',
			body: data,
		})
		.then(result => {
			//console.log(result.data);
			this.setState({
				didSubmit: true
			})
		});
	}

	render() {
			return (
				<div className="arlo_tm_wrapper_all">
					<div id="arlo_tm_popup_blog">
						<div className="container">
							<div className="inner_popup scrollable" />
						</div>
						<span className="close"><a href="#" /></span>
					</div>
					{/* PRELOADER */}
					<div className={`arlo_tm_preloader ${this.state.isLoading ? "" : "loaded"}`}>
						<div className="spinner_wrap">
							<div className="spinner" />
						</div>
					</div>
					{/* /PRELOADER */}
					{/* MOBILE MENU */}
					<div ref='mobile_menu_wrap' className="arlo_tm_mobile_header_wrap">
						<div className="main_wrap">
							<div className="logo">
								<img style={{width: 160}} src="/assets/img/logo.svg" alt='Alen Budimir Logo'/>
							</div>
							<div className="arlo_tm_trigger">
								<div ref='hamburger' className="hamburger hamburger--collapse-r">
									<div className="hamburger-box">
										<div className="hamburger-inner" />
									</div>
								</div>
							</div>
						</div>
						<div className="arlo_tm_mobile_menu_wrap">
							<div className="mob_menu">
								<ul className="anchor_nav">
									<li><a href="#home">Home</a></li>
									<li><a href="#about">About</a></li>
									<li><a href="#services">Services</a></li>
									<li><a href="#portfolio">Portfolio</a></li>
									<li><a href="#news">News</a></li>
									<li><a href="#contact">Contact</a></li>
								</ul>
							</div>
						</div>
					</div>
					{/* /MOBILE MENU */}

					{/* CONTENT */}
					<div className="arlo_tm_content">
						{/* LEFTPART */}
						<div className="arlo_tm_leftpart_wrap">
							<div className="leftpart_inner">
								<div className="logo_wrap">
									<a href="#"><img src="/assets/img/logo.svg" alt='Alen Budimir Logo'/></a>
								</div>
								<div className="menu_list_wrap">
									<ul className="anchor_nav">
										<li><a href="#home">Home</a></li>
										<li><a href="#about">About</a></li>
										<li><a href="#services">Services</a></li>
										<li><a href="#portfolio">Portfolio</a></li>
										<li><a href="#contact">Contact</a></li>
									</ul>
								</div>
								<div className="leftpart_bottom">
									<div className="social_wrap">
										<ul>
											<li><a href="https://www.facebook.com/alenbudimir20" aria-label="Facebook"><i className="xcon-facebook" /></a></li>
											<li><a href="https://www.linkedin.com/in/alen-budimir/" aria-label="LinkedIn"><i className="xcon-linkedin" /></a></li>
											<li><a href="https://www.instagram.com/alenbudimir/" aria-label="Instagram"><i className="xcon-instagram" /></a></li>
											<li><a href="https://github.com/budi1200" aria-label="Github"><img className='github_image' src='/assets/img/social/github_icon.png' height={15} width={15} alt='Github link'/></a></li>
										</ul>
									</div>
								</div>
								<a className="arlo_tm_resize" href="#" aria-label="Hide sidebar"><i className="xcon-angle-left" /></a>
							</div>
						</div>
						{/* /LEFTPART */}
						{/* RIGHTPART */}
						<div className="arlo_tm_rightpart">
							<div className="rightpart_inner">
								<div className="arlo_tm_section" id="home">
									<div className="arlo_tm_hero_header_wrap">
										<div className="arlo_tm_universal_box_wrap particle jarallax" data-speed="0.1">
											<div id="particles-js" /> 
											<div className="particle_overlay" />
											<div id='header_section' className="inner_content">
												<div className="image_wrap">
													<img src="/assets/img/newprofileimg.png" alt='Profile image'/>
												</div>
												<div className="name_holder">
													<h3>Alen <span>Budimir</span></h3>
												</div>
												<div className="text_typing">
													<p>I'm a <span className="arlo_tm_animation_text_word" /></p>
												</div>
											</div>
											<div className="arlo_tm_arrow_wrap bounce anchor">
												<a href="#about"><i className="xcon-angle-double-down" aria-label="Move down"/></a>
											</div>
										</div>
									</div>
								</div>

								{/* ABOUT */}
								<div className="arlo_tm_section relative" id="about">
									<div className="arlo_tm_about_wrapper_all">
										<div className="container">
											<div className="arlo_tm_title_holder">
												<h3>About Me</h3>
												<span>Main information about me</span>
											</div>
											<div className="arlo_tm_about_wrap">
												<div className="author_wrap">
													<div className="leftbox">
														<div className="about_image_wrap parallax" data-relative-input="true">
															<div className="image layer" data-depth="0.1">
																<img src="/assets/img/newprofileimg.png" alt='Profile image'/>
																<div className="inner" data-img-url="/assets/img/newprofileimg.png" />
															</div>
															<div className="border layer" data-depth="0.2">
																<img src="/assets/img/newprofileimg.png" alt='Profile image'/>
																<div className="inner" />
															</div>
														</div>
													</div>
													<div className="rightbox">
														<div className="arlo_tm_mini_title_holder">
															<h4>I'm Alen Budimir</h4>
														</div>
														<div className="definition">
															<p>Hello! My name is <strong>Alen Budimir</strong>. I am a Web Developer, and I'm very passionate and dedicated to my work.</p>
														</div>
														<div className="about_short_contact_wrap">
															<ul>
																<li>
																	<span><label>Birthday:</label> December, 2000</span>
																</li>
																<li>
																	<span><label>Age:</label> {moment().diff('2000-12-01', 'years')}</span>
																</li>
																<li>
																	<span><label>Country:</label> Slovenia</span>
																</li>
																<li>
																	<span><label>Interests:</label> Tv series</span>
																</li>
																<li>
																	<span><label>Study:</label> ERŠ Velenje</span>
																</li>
																<li>
																	<span><label>Degree:</label> Soon</span>
																</li>	
																<li>
																	<span><label>Website:</label> <a href="https://budimir.si/">budimir.si</a></span>
																</li>
																<li>
																	<span><label>Mail:</label> <a href="mailto:alen.budimir20@gmail.com">alen.budimir20@gmail.com</a></span>
																</li>
																<li>
																	<span><label>Github:</label> <a href="https://github.com/budi1200">budi1200</a></span>
																</li>
																<li>
																	<span><label>LinkedIn:</label> <a href="https://www.linkedin.com/in/alen-budimir/">Alen Budimir</a></span>
																</li>
															</ul>
														</div>
														<div className="buttons_wrap">
															<ul>
																<li>
																	<a href="index.html"><span>Download CV</span></a>
																</li>
																<li className="anchor">
																	<a href="#contact"><span>Send Message</span></a>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* /ABOUT */}
								{/* SKILLS */}
								<div className="arlo_tm_section">
									<div className="arlo_tm_skills_wrap">
										<div className="container">
											<div className="inner_wrap">
												<div className="leftbox">
													<div className="arlo_tm_mini_title_holder">
														<h4>Some of my skills</h4>
													</div>
													<p>I am always looking to improve my current skills and learn new ones. I'm currently mostly interested in learning Python and NodeJS among other things.</p>
													<p>Check out my Github for more of my skills.</p>
												</div>
												<div className="rightbox">
													<div className="progress_bar_wrap_total">
														<div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
															<div className="arlo_tm_progress" data-value={60} data-color="#000">
																<span><span className="label">Wordpress <span className="experience"></span></span><span className="number">60%</span></span>
																<div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar" /></div></div>
															</div>
															<div className="arlo_tm_progress" data-value={85} data-color="#000">
																<span><span className="label">Css - <span className="experience">3 years of experience</span></span><span className="number">85%</span></span>
																<div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar" /></div></div>
															</div>
															<div className="arlo_tm_progress" data-value={60} data-color="#000">
																<span><span className="label">JavaScript - <span className="experience">1 year of experience</span></span><span className="number">60%</span></span>
																<div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar" /></div></div>
															</div>
															<div className="arlo_tm_progress" data-value={50} data-color="#000">
																<span><span className="label">Php - <span className="experience">1 year of experience</span></span><span className="number">50%</span></span>
																<div className="arlo_tm_bar_bg"><div className="arlo_tm_bar_wrap"><div className="arlo_tm_bar" /></div></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* /SKILLS */}
								{/* SERVICES */}
								<div className="arlo_tm_section" id="services">
									<div className="arlo_tm_services_wrap">
										<div className="container">
											<div className="arlo_tm_title_holder">
												<h3>Amazing Services</h3>
												<span>What I offer</span>
											</div>
											<div className="list_wrap">
												<ul>
													<li>
														<div className="inner">
															<div className="icon">
																<img className="svg" src="/assets/img/svg/camera-diaphragm.svg" alt='Frontend icon'/>
															</div>
															<div className="title_service">
																<h3>Frontend Development</h3>
															</div>
															<div className="text">
																<p>Frontend development is a process of creation, with the intention of presenting the content on electronic pages ...</p>
															</div>
														</div>
													</li>
													
													<li>
														<div className="inner">
															<div className="icon">
																<img className="svg" src="/assets/img/svg/new-tab.svg" alt='Backend icon'/>
															</div>
															<div className="title_service">
																<h3>Backend Development</h3>
															</div>
															<div className="text">
																<p>Web design is a similar process of creation, with the intention of presenting the content on electronic pages ...</p>
															</div>
														</div>
													</li>													
													
													<li>
														<div className="inner">
															<div className="icon">
																<img className="svg" src="/assets/img/svg/smartphone.svg" alt='Mobile icon'/>
															</div>
															<div className="title_service">
																<h3>Mobile App Development</h3>
															</div>
															<div className="text">
																<p>Mobile app development is the act or process by which a mobile app is developed for mobile devices...</p>
															</div>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								{/* /SERVICES */}
								{/* PORTFOLIO */}
								<HomeProjects/>
								{/* /PORTFOLIO */}
								{/* COUNTERBOX */}
								<div className="arlo_tm_section">
									<div className="container">
										<div className="arlo_tm_counter_wrap" data-col={4} data-delay={300}>
											<ul className="arlo_tm_counter_list arlo_tm_miniboxes">
												<li>
													<div className="inner arlo_tm_minibox">
														<h3><span><span className="arlo_tm_counter" data-from={0} data-to={30} data-speed={3000}>0</span>+</span></h3>
														<span>Projects Completed</span>
													</div>
												</li>
												<li>
													<div className="inner arlo_tm_minibox">
														<h3><span><span className="arlo_tm_counter" data-from={0} data-to={10} data-speed={3000}>0</span>K+</span></h3>
														<span>Lines of Code</span>
													</div>
												</li>
												<li>
													<div className="inner arlo_tm_minibox">
														<h3><span><span className="arlo_tm_counter" data-from={0} data-to={20} data-speed={3000}>0</span>+</span></h3>
														<span>Happy Clients</span>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
								{/* /COUNTERBOX */}
								{/* CONTACT & FOOTER */}
								<div className="arlo_tm_section" id="contact">
									<div className="container">
										<div className="arlo_tm_title_holder contact">
											<h3>Contact Me</h3>
											<span>Get in touch with me</span>
										</div>
									</div>
									<div className="arlo_tm_footer_contact_wrapper_all">
										<div className="arlo_tm_contact_wrap_all">
											<div className="container">
												<div className="leftbox">
													<div className="arlo_tm_mini_title_holder contact">
														<h4>Get in Touch</h4>
													</div>
													<div className="short_info_wrap">
														<ul>
															<li><p><label>Email:</label><span><a href="mailto:alen.budimir20@gmail.com">alen.budimir20@gmail.com</a></span></p></li>
															<li><p><label>Website:</label><span><a href="https://budimir.si/">budimir.si</a></span></p></li>
														</ul>
													</div>
												</div>
												<div className="rightbox">
													<div className="arlo_tm_contact_wrap">
														<div className="main_input_wrap">
															{!this.state.didSubmit ? 
																(
																	<form onSubmit={this.handleSubmit} className="contact_form" id="contact_form">
																		<div className="returnmessage" data-success="Your message has been received, We will contact you soon."></div>
																		<div className="empty_notice"><span>Please Fill Required Fields</span></div>
																		<div className="wrap">
																			<input ref='email' id="email" type="email" placeholder="Your Email" name='_replyto' aria-label="Email"/>
																		</div>
																		<div className="wrap">
																			<textarea ref='message' id="message" placeholder="Your Message" defaultValue={""} name='name' aria-label="Message"/>
																		</div>
																		<div className="arlo_tm_button">
																			<button className='contact-button' id="send_message"><span>Send Message</span></button>
																		</div>
																	</form>
																) : null
															}
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="arlo_tm_footer_wrap">
											<div className="container">
												<p>© Copyright {moment().format('YYYY')}. All Rights are Reserved.</p>
											</div>
										</div>
									</div>
								</div>
								{/* /CONTACT & FOOTER */}
							</div>
						</div>
						{/* /RIGHTPART */}
						<a className="arlo_tm_totop" href="#" /> 
					</div>
				</div>
			);
	}
}

export default scriptLoader(
	[
		'/assets/js/jquery.js',
		'/assets/js/plugins.js'
	],
	'/assets/js/init.js'
)(Home)
