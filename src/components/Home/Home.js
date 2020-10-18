import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Introduction from './Intoduction/Introduction';
import Projects from './Projects/Projects';
import Skills from "./Skills/Skills";

const Home = () => {
    return ( 
        <React.Fragment>
            <Introduction />
            <AboutMe />
            <Projects />
            <Skills />
        </React.Fragment>
     );
}
 
export default Home;