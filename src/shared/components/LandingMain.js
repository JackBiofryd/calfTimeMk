import React, { useContext } from 'react';
import Button from './Button';
import AuthContext from '../../context/auth-context';

export default function LandingMain() {
	const auth = useContext(AuthContext);

	return (
		<div className="landing-image-container">
			<div className="landing-image"></div>
			<div className="landing-text">
				<h2 className="XL-heading">
					Farmers <span className="text-primary">Galore</span>
				</h2>
				<p className="lead bold mb-0-5">Keep your farm on track!</p>
				{!auth.isLoggedIn && (
					<Button to="/signup" color="primary" extraClasses="my-1">
						Get Started!
					</Button>
				)}
			</div>
		</div>
	);
}
