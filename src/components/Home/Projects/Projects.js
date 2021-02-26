import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ProjectBox from '../../Project-Box/ProjectBox';
import { projectList } from '../../../data/projectList';
import './Projects.css';

const Projects = () => {
	return (
		<Container className="mb">
			<div className="main-area2">
				<div className="title">Projects</div>

				<Grid container spacing={3} className="main-grid">
					{projectList.map((project) => (
						<Grid item sm={12} md={6} key={project.title}>
							<ProjectBox
								title={project.title}
								content={project.about}
								link={project.link}
								color={project.color}
								client={project.client}
								server={project.server}
							/>
						</Grid>
					))}
				</Grid>
			</div>
		</Container>
	);
};

export default Projects;
