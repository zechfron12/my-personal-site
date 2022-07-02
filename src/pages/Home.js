import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import Navbar from '../components/Navbar/Navbar';
import { themeOptions } from '../mainTheme';

const Home = () => {
	return (
		<ThemeProvider theme={themeOptions}>
			<div>
				<Navbar></Navbar>
			</div>
		</ThemeProvider>
	);
};

export default Home;
