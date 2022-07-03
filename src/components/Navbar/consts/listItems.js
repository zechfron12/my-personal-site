import InfoIcon from '@mui/icons-material/Info';
import ConstructionIcon from '@mui/icons-material/Construction';
import WorkIcon from '@mui/icons-material/Work';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { navbarStyles } from '../../../styles';

export const mainNavbarItems = [
	{
		id: 0,
		icon: <InfoIcon sx={navbarStyles.icons} />,
		label: 'About',
		route: 'about',
	},
	{
		id: 1,
		icon: <ConstructionIcon sx={navbarStyles.icons} />,
		label: 'MySkills',
		route: 'myskills',
	},
	{
		id: 2,
		icon: <WorkIcon sx={navbarStyles.icons} />,
		label: 'Work',
		route: 'work',
	},
	{
		id: 3,
		icon: <AlternateEmailIcon sx={navbarStyles.icons} 	/>,
		label: 'Contact',
		route: 'contact',
	},
];
