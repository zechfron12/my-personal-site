import { createTheme } from '@mui/material/styles';

export const themeOptions = createTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#242629',
			contrastText: '#7f5af0',
		},
		secondary: {
			main: '#7f5af0',
			contrastText: '#2cb67d',
		},
		background: {
			default: '#16161a',
			paper: '#242629',
		},
		divider: '#16161a',
		text: {
			primary: '#fffffe',
			disabled: '#72757e',
			hint: '#2cb67d',
			secondary: '#fffffe',
		},
		success: {
			main: '#2cb67d',
		},
	},
	typography: {
		fontFamily: 'Raleway',
	},
});
