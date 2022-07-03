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
