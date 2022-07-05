import * as React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { themeOptions } from './mainTheme';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/Contact';
import Contact from './pages/Contact';
import MySkills from './pages/MySkills';
import Work from './pages/Work';
import { Grid } from '@mui/material';

export default function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='contact' element={<Contact />} />
					<Route path='myskills' element={<MySkills />} />
					<Route path='work' element={<Work />} />
				</Route>
			</Routes>
		</div>
	);
}

const Layout = () => {
	return (
		<ThemeProvider theme={themeOptions}>
			<Grid container>
				<Grid item lg={1} xs={0}>
					<Navbar />
				</Grid>
				<Grid item lg={11} xs={12}>
					<Outlet />
				</Grid>
			</Grid>
		</ThemeProvider>
	);
};
