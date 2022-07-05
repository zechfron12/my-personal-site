import React from 'react';
import LandingPage from './subpages/LandingPage';
import MyPortfolio from './subpages/MyPortfolio';
import AboutMe from './subpages/AboutMe';
import ContactMe from './subpages/ContactMe';

const Home = () => {
	return (
		<div>
			<LandingPage />
			<MyPortfolio />
			<AboutMe />
			<ContactMe />
		</div>
	);
};

export default Home;
