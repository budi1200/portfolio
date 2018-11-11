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
        }
    }

    render(){
        return(
            <div>
                <Header/>
                
                <main>
                    <FirstScreen/>

                    <HomeProjects/>


                </main>

                <Footer/>
            </div>
        );
    }
}

export default Home;