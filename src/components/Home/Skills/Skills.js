import React from 'react';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import { DiReact, DiMongodb, DiGithubBadge } from 'react-icons/di';
import { FaNode } from 'react-icons/fa';
import { SiNetlify } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { GrHeroku } from 'react-icons/gr';
import { AiFillHtml5 } from 'react-icons/ai';
import Zoom from '@material-ui/core/Zoom';
import './Skills.css';

const Stooltip = withStyles({
	tooltipPlacementBottom: {
		margin: '-5px 0',
	},
})(Tooltip);

const Projects = () => {
	return (
		<Container className="mb-pro">
			<div className="main-area2-pro">
				<div className="title">Skills</div>
				<div className="row logo-collection">
					<Stooltip title="React" TransitionComponent={Zoom}>
						<span>
							<DiReact className="logo" style={{ color: '#61dafb' }} />
						</span>
					</Stooltip>

					<Stooltip title="React" TransitionComponent={Zoom}>
						<span>
							<DiReact className="logo" style={{ color: '#61dafb' }} />
						</span>
					</Stooltip>

					<Stooltip title="React" TransitionComponent={Zoom}>
						<span>
							<DiReact className="logo" style={{ color: '#61dafb' }} />
						</span>
					</Stooltip>

					<Stooltip title="React" TransitionComponent={Zoom}>
						<span>
							<AiFillHtml5 className="logo" style={{ color: '#61dafb' }} />
						</span>
					</Stooltip>

					<Stooltip title="React" TransitionComponent={Zoom}>
						<span>
							<GrHeroku className="logo" style={{ color: '#79589f' }} />
						</span>
					</Stooltip>

					<Stooltip title="React" TransitionComponent={Zoom}>
						<span>
							<DiGithubBadge className="logo" style={{ color: 'white' }} />
						</span>
					</Stooltip>

					<Stooltip title="React" TransitionComponent={Zoom}>
						<span>
							<SiNetlify className="logo" style={{ color: '#227aa9' }} />
						</span>
					</Stooltip>

					<Stooltip title="React" TransitionComponent={Zoom}>
						<span>
							<SiFirebase className="logo" style={{ color: 'FFA611' }} />
						</span>
					</Stooltip>

					<Stooltip title="React" TransitionComponent={Zoom}>
						<span>
							<DiMongodb className="logo" style={{ color: '#13aa52' }} />
						</span>
					</Stooltip>

					<Stooltip title="React" TransitionComponent={Zoom}>
						<span>
							<FaNode className="logo" style={{ color: '#026e00' }} />
						</span>
					</Stooltip>
				</div>
			</div>
		</Container>
	);
};

export default Projects;
