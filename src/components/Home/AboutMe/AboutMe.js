import {React,useEffect,useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { myDetails } from '../../../data/myDetails';
import './AboutMe.css';

const AboutMe = () => {
	
	const intros = myDetails;
	  const [index, updateIndex] = useState(0);
	
	  useEffect(() => {
		const timer = window.setInterval(() => {
		  updateIndex((prevIndex) => (prevIndex +1) % intros.length);
		}, 2000);
		return () => {
		  window.clearInterval(timer);
		}
	  }, [intros.length])

	return (
		<Container>
			<Grid item xs={12}>
				<div className="main-area">
					{/* <div className="title">{title}</div> */}
					<div className="content">
						Hey, there! I am
						<div className="name"> Sanskar Seth</div>
						<div className="intro"> {intros[index]} </div>	
					</div>
				</div>
			</Grid>
		</Container>
	);
};

export default AboutMe;
