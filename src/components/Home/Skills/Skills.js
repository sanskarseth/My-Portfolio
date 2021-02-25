import React from 'react';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiMongodb, DiGithubBadge, DiCss3Full } from 'react-icons/di';
import { FaNode } from 'react-icons/fa';
import { FcLinux } from 'react-icons/fc';
import { GrHeroku, GrMysql } from 'react-icons/gr';
import {
	SiNetlify,
	SiCplusplus,
	SiFirebase,
	SiJavascript,
	SiPython,
	SiReact,
} from 'react-icons/si';
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
				<div className="title">Tech Stack</div>
				<div className="row logo-collection">
					<Stooltip title="C++" TransitionComponent={Zoom}>
						<span>
							<SiCplusplus className="logo2" style={{ color: '#095d95' }} />
						</span>
					</Stooltip>
					<Stooltip title="JavaScript" TransitionComponent={Zoom}>
						<span>
							<SiJavascript className="logo2" style={{ color: '#f0db4f' }} />
						</span>
					</Stooltip>
					<Stooltip title="Python" TransitionComponent={Zoom}>
						<span>
							<SiPython className="logo2" style={{ color: '306998' }} />
						</span>
					</Stooltip>

					<Stooltip title="React" TransitionComponent={Zoom}>
						<span>
							<SiReact className="logo2" style={{ color: '#61dafb' }} />
						</span>
					</Stooltip>

					<Stooltip title="NodeJs" TransitionComponent={Zoom}>
						<span>
							<FaNode className="logo" style={{ color: '#026e00' }} />
						</span>
					</Stooltip>

					<Stooltip title="HTML" TransitionComponent={Zoom}>
						<span>
							<AiFillHtml5 className="logo2" style={{ color: 'F16529' }} />
						</span>
					</Stooltip>

					<Stooltip title="CSS" TransitionComponent={Zoom}>
						<span>
							<DiCss3Full className="logo2" style={{ color: '3C99DC' }} />
						</span>
					</Stooltip>

					<Stooltip title="MongoDB" TransitionComponent={Zoom}>
						<span>
							<DiMongodb className="logo" style={{ color: '#13aa52' }} />
						</span>
					</Stooltip>

					<Stooltip title="MySQL" TransitionComponent={Zoom}>
						<span>
							<GrMysql className="logo2" style={{ color: '00758F' }} />
						</span>
					</Stooltip>

					<Stooltip title="Firebase" TransitionComponent={Zoom}>
						<span>
							<SiFirebase className="logo2" style={{ color: 'FFA611' }} />
						</span>
					</Stooltip>

					<Stooltip title="GitHub" TransitionComponent={Zoom}>
						<span>
							<DiGithubBadge className="logo" style={{ color: 'white' }} />
						</span>
					</Stooltip>

					<Stooltip title="Netlify" TransitionComponent={Zoom}>
						<span>
							<SiNetlify className="logo2" style={{ color: '#227aa9' }} />
						</span>
					</Stooltip>

					<Stooltip title="Heroku" TransitionComponent={Zoom}>
						<span>
							<GrHeroku className="logo2" style={{ color: '#79589f' }} />
						</span>
					</Stooltip>

					<Stooltip title="Linux" TransitionComponent={Zoom}>
						<span>
							<FcLinux className="logo" style={{ color: '#79589f' }} />
						</span>
					</Stooltip>
				</div>
			</div>
		</Container>
	);
};

export default Projects;
