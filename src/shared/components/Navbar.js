import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import logo from '../images/logo.png';

export default function Navbar(props) {
	return (
		<nav className={`main-navbar py-1 ${props.fixed && 'navbar-fixed'}`}>
			<div className="container">
				<Link to="/" className="nav-logo">
					<img className="logo" src={logo} alt="Logo" />
					<h1 className="M-heading">Calf Time</h1>
				</Link>
				<NavLinks />
			</div>
		</nav>
	);
}
