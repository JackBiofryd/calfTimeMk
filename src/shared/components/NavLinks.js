import React, { useContext } from 'react';
import Button from './Button';
import AuthContext from '../../context/auth-context';

export default function NavLinks() {
	const auth = useContext(AuthContext);

	return (
		<div>
			<ul className="nav-links">
				{auth.isLoggedIn && (
					<React.Fragment>
						<li>
							<Button to="/cows">COWS</Button>
						</li>
						<li>
							<Button onClick={auth.logout}>LOGOUT</Button>
						</li>
					</React.Fragment>
				)}
				{!auth.isLoggedIn && (
					<li>
						<Button to="/login">LOGIN</Button>
					</li>
				)}
				{!auth.isLoggedIn && (
					<li>
						<Button to="/signup">SIGN UP</Button>
					</li>
				)}
			</ul>
		</div>
	);
}
