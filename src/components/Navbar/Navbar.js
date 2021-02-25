import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import styled from 'styled-components';
import Burger from './Burger/Burger';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
	width: 100%;
	height: 55px;
	padding: 0 20px;
	display: flex;
	justify-content: space-between;
	.logo {
		padding: 20px 0;
	}
`;

const Navbar = () => {
	return (
		<Nav>
			<Link className="nav-link logo" to="/home">
				LOGO
			</Link>
			<Burger />
		</Nav>
	);
};

export default Navbar;
