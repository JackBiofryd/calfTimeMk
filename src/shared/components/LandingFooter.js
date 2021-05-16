import React from 'react';
import cowGrassImg from '../images/cowGrass.png';

export default function LandingFooter() {
	return (
		<footer className="landing-footer">
			<div className="cow-img-container">
				<img
					src={cowGrassImg}
					className="cow-img"
					alt="Cow Eating Grass"
				/>
			</div>
			<hr className="primary-line" />
			<div className="white-bar"></div>
		</footer>
	);
}
