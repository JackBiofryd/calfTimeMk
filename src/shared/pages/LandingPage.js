import React from 'react';
import Navbar from '../components/Navbar';
import LandingMain from '../components/LandingMain';
import LandingFooter from '../components/LandingFooter';

export default function LandingPage() {
	return (
		<div className="landing-page">
			<Navbar fixed />
			<LandingMain />
			<LandingFooter />
		</div>
	);
}
