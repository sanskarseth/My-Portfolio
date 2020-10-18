import React from 'react';
import "./Home.css";
import AboutMe from './AboutMe/AboutMe';
import Introduction from './Intoduction/Introduction';
import Projects from './Projects/Projects';
import Skills from "./Skills/Skills";
// import LandingPage from "./LandingPage/LandingPage";
import Footer from "../Footer/Footer";

const Home = () => {
    return ( 
        <div className="home-component">
            {/* <LandingPage /> */}
            <Introduction />
            <AboutMe />
            <Projects />
            <Skills />
        </div>
     );
}
 
export default Home;