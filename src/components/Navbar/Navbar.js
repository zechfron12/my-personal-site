import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

import BigNavbar from './NavabarVariants/BigNavbar';
import SmallNavbar from './NavabarVariants/SmallNavbar';

const Navbar = () => {
	const isBig = useMediaQuery('(min-width:1200px)');

	return <div>{isBig ? <BigNavbar /> : <SmallNavbar />}</div>;
};

export default Navbar;
