import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './AboutMe.css';

const AboutMe = () => {
	// const title = 'About Me';
	return (
		<Container>
			<Grid item xs={12}>
				<div className="main-area">
					{/* <div className="title">{title}</div> */}
					<div className="content">
						Hey, there! I am
						<div className="name"> Sanskar Seth</div>
						Junior @ IIIT Ranchi
						<br />
						Coder 📝 | Developer 💻 | Open Source ❤️ | Learner 😀
					</div>
				</div>
			</Grid>
		</Container>
	);
};

export default AboutMe;
