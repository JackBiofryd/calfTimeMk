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
					Богатство за <span className="text-primary">Фармери</span>
				</h2>
				<p className="lead bold mb-0-5">
					Држете ја вашата фарма под контрола!
				</p>
				{!auth.isLoggedIn && (
					<Button to="/signup" color="primary" extraClasses="my-1">
						Започнете
					</Button>
				)}
			</div>
		</div>
	);
}
