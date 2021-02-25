import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import './Footer.css';

const Footer = () => {
	return (
		<div className="footer">
			<div className="title">Contact Me</div>
			<div className="logo-collection">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/sanskarseth"
				>
					<GitHubIcon className="logo" style={{ color: 'white' }} />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/in/sanskarseth"
				>
					<LinkedInIcon className="logo2" style={{ color: '#2867B2' }} />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://twitter.com/__sanSkar__"
				>
					<TwitterIcon className="logo2" style={{ color: '#00acee' }} />
				</a>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://facebook.com/sethsanskar"
				>
					<FacebookIcon className="logo2" style={{ color: '#4267B2' }} />
				</a>
			</div>
			<div className="mail">
				<MailIcon
					className="logo"
					style={{ color: 'EA4335', cursor: 'default' }}
				/>
				<div className="mail-link">
					<Link
						className="mail-link-tag"
						to="#"
						onClick={(e) => {
							window.location = 'mailto:sethsanskar@gmail.com';
							e.preventDefault();
						}}
					>
						sethsanskar@gmail.com
					</Link>
				</div>
			</div>
			<hr />
			<div className="fcaption">
				<span>
					Made with <span style={{ color: '#FF0000' }}>❤ </span>
					by{' '}
					<div className="fcaption-link">
						<a
							className="fcaption-link-tag"
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/sanskarseth"
						>
							Sanskar
						</a>
					</div>{' '}
					©️ 2021.
				</span>
			</div>
		</div>
	);
};

export default Footer;
