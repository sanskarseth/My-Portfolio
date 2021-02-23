import React from 'react';
import ContentBox from '../../content-box/ContentBox';
import './AboutMe.css';

const AboutMe = () => {
	const title = 'About Me';
	const content = [
		'Hey! I am Sanskar',
		<br />,
		'Currently a pre-final year student from IIIT Ranchi.',
		<br />,
		'I love solving problems. I am a web developer and acompetitive coder.',
	];

	return <ContentBox title={title} content={content} />;
};

export default AboutMe;
