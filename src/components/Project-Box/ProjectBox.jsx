import React from 'react';
import './ProjectBox.css';

const AboutMe = ({title,content}) => {
	return (
        <div className="main-areaa">
            <div className="title">{title}</div>
            <div className="content">
                {content}
            </div>
        </div>

	);
};

export default AboutMe;
