import React, { Component } from 'react';

// Custom Components
import Header from './Header';
import Footer from './Footer';
import FirstScreen from './FirstScreen';
import HomeProjects from './HomeProjects';



class Home extends Component{

    constructor(props){
        super(props)

        this.state = {
            isVisible: false
        }
    }

    lightboxToggle = (state) => {
        if(state == "open"){
            this.setState({
                isVisible: true
            });
        }else{
            this.setState({
                isVisible: false
            })
        }
    }

    render(){
        return(
            <div style={{overflow: this.state.isVisible ? "hidden" : "inherit"}}>
                <Header/>
                
                <main>
                    <FirstScreen/>

                    <HomeProjects lightboxToggle={this.lightboxToggle}/>


                </main>

                <Footer/>
            </div>
        );
    }
}

export default Home;