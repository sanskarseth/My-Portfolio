import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import Grid from '@material-ui/core/Grid';
import './ProjectBox.css';

const ProjectBox = ({title,content,link,color,client,server}) => {
	return (
        <div className="main-areaa">
            <div className="title">
                <a
                    className="headi"
					target="_blank"
					rel="noopener noreferrer"
					href={link}
                    style={{textDecoration:'none',color:`${color}`}}
				>
					{title}
				</a>
            </div>
            <div className="content">
                {content}
            </div>
            <Grid className="source">

                <Grid item sm={6} className="client">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={client}
                        style={{textDecoration:'none',color:'white'}}
                    >
                        <div className="data"> Client </div>
                        <GitHubIcon className="iconn" style={{ color: 'white' }} />
                    </a>
                </Grid>
                
                {server && 
                <Grid item sm={6} className="server">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={server}
                        style={{textDecoration:'none',color:'white'}}
                    >
                   
                        <div className="data"> Server </div>
                        <GitHubIcon className="iconn" style={{ color: 'white' }} />
				    </a>
                </Grid>
                    }

            </Grid>

        </div>

	);
};

export default ProjectBox;
