import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ProjectBox from '../../Project-Box/ProjectBox';
import './Projects.css';

const Projects = () => {
	return (
		<Container className="mb">
			<div className="main-area2">
				<div className="title">Projects</div>
				<Grid container spacing={3} className="main-grid">
					<Grid item sm={12} md={6}>
						<ProjectBox title="ShoppeR" content="ssd" />
					</Grid>
					<Grid item sm={12} md={6}>
						<ProjectBox title="GetiT" content="ssd" />
					</Grid>
					<Grid item sm={12} md={6}>
						<ProjectBox title="CricPing" content="ssd" />
					</Grid>
					<Grid item sm={12} md={6}>
						<ProjectBox title="Portfolio" content="ssd" />
					</Grid>
				</Grid>
			</div>
		</Container>
	);
};

export default Projects;
