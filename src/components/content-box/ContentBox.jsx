import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './ContentBox.css';

const AboutMe = ({title,content}) => {
	return (
		<Container>
			<Grid item xs={12}>
				<div className="main-area">
					<div className="title">{title}</div>
					<div className="content">
						{content}
					</div>
				</div>
			</Grid>
		</Container>
	);
};

export default AboutMe;
