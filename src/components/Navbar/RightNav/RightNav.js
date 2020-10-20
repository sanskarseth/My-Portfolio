import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import styled from 'styled-components';
import './RightNav.css';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;

    //color of right hamburger background when open
    background-color: #0D2538;
    
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({open}) => {
  return (
    <Ul open={open}>
        <li>
            <NavLink className="nav-link" to="/about_me">About Me</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/my_works">My Works</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/register">Contact Me</NavLink>
        </li>
    </Ul>
  )
}

export default RightNav;