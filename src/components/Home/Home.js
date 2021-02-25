import React from 'react';
import './Home.css';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const Home = () => {
	return (
		<div className="home-component">
			<AboutMe />
			<Projects />
			<Skills />
		</div>
	);
};

export default Home;
