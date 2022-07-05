export const navbarStyles = {
	drawer: {
		position: 'absolute',
		'& .MuiDrawer-paper': {
			boxSizing: 'border-box',
			backgroundColor: '#242629',
			color: '#fffffe',
			width: 1 / 12,
			display: 'flex',
			justifyContent: 'space-between',
			overflow: 'hidden',
		},
	},
	icons: {
		color: '#7f5af0',
		margin: '5px',
	},
	text: {
		color: '##fffffe',
	},
	menuIcon: {
		width: '50px',
		height: '50px',
		zIndex: '100',
	},
	openButton: {
		color: '#7f5af0',
		position: 'absolute',
		right: '20px',
	},
	smallDrawer: {
		width: 200,
		flexShrink: 0,
		'& .MuiDrawer-paper': {
			width: '100vw',
			boxSizing: 'border-box',
			display: 'flex',
			justifyContent: 'space-between',
		},
	},
};

export const subpageStyles = {
	container: {
		height: '100vh',
		backgroundColor: '#16161a',
	},
};

export const titleStyles = {
	mainTitle: {
		color: '#fffffe',
		fontWeight: 'bold',
		fontSize: {
			xxs: '3rem',
			xs: '3rem', // phone
			sm: '5rem', // tablets
			md: '5rem', // small laptop
			lg: '6rem', // desktop
			xl: '6rem', // large screens,
		},
	},
	subTitle: {
		color: '#94a1b2',
		fontWeight: 'light',
		fontSize: {
			xxs: '1.5rem',
			xs: '1.5rem', // phone
			sm: '2rem', // tablets
			md: '2rem', // small laptop
			lg: '2rem', // desktop
			xl: '3rem', // large screens,
		},
	},
};

export const arrowStyle = {
	color: '#2cb67d',
	fontSize: {
		xxs: '1.5rem',
		xs: '1.5rem', // phone
		sm: '2rem', // tablets
		md: '2rem', // small laptop
		lg: '2rem', // desktop
		xl: '3rem', // large screens,
	},
};
