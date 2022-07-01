import React from 'react';

import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from './consts/listItems';
import { navbarStyles } from '../../styles';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 200;

const Navbar = () => {
	const navigate = useNavigate();

	return (
		<Drawer sx={navbarStyles.drawer} variant='permanent' anchor='left'>
			{/* LOGO HERE */}
			<Toolbar />
			{/* LOGO HERE */}
			<Divider />
			<List>
				{mainNavbarItems.map((item, index) => (
					<div>
						<ListItem button key={item.id} onClick={()=>navigate(item.route)}>
							<ListItemButton>
								<ListItemIcon sx={navbarStyles.icons}>
									{item.icon}
								</ListItemIcon>
								<ListItemText primary={item.label} />
							</ListItemButton>
						</ListItem>
					</div>
				))}
			</List>
			<Divider />
		</Drawer>
	);
};

export default Navbar;
