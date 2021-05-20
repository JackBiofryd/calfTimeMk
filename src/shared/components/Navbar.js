import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import logo from '../images/logo.png';
import AuthContext from '../../context/auth-context';

export default function Navbar(props) {
	const context = useContext(AuthContext);

	const changeThemeColor = () => {
		if (context.isDarkMode) {
			document.querySelector('html').classList.remove('dark-mode');
		} else {
			document.querySelector('html').classList.add('dark-mode');
		}
		context.setIsDarkMode(prevMode => !prevMode);
	};

	return (
		<nav className={`main-navbar py-1 ${props.fixed && 'navbar-fixed'}`}>
			<div className="container">
				<Link to="/" className="nav-logo">
					<img className="logo" src={logo} alt="Logo" />
					<h1 className="M-heading">Calf Time</h1>
				</Link>
				<NavLinks />
				<i
					className={`fas fa-lightbulb dark-mode-icon ${
						context.isDarkMode && 'is-dark-mode'
					}`}
					onClick={changeThemeColor}></i>
			</div>
		</nav>
	);
}
