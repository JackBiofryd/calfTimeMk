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
							<Button to="/cows">КРАВИ</Button>
						</li>
						<li>
							<Button onClick={auth.logout}>ОДЈАВИ СЕ</Button>
						</li>
					</React.Fragment>
				)}
				{!auth.isLoggedIn && (
					<li>
						<Button to="/login">ЛОГИРАЈ СЕ</Button>
					</li>
				)}
				{!auth.isLoggedIn && (
					<li>
						<Button to="/signup">РЕГИСТРИРАЈ СЕ</Button>
					</li>
				)}
			</ul>
		</div>
	);
}
