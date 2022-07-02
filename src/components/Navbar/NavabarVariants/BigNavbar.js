import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from '../consts/listItems';
import { navbarStyles } from '../../../styles';
import { useNavigate } from 'react-router-dom';

const BigNavbar = () => {
	const navigate = useNavigate();

	return (
		<Drawer sx={navbarStyles.drawer} variant='permanent' anchor='left'>
			<a href='/'>
				<img
					src={require('../../../assets/mylogo.png')}
					alt='logo'
					width={200}
					height={200}
				/>
			</a>
			<List>
				{mainNavbarItems.map((item, index) => (
					<div>
						<ListItem
							button
							key={item.id}
							onClick={() => navigate(item.route)}
							disablePadding
						>
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
			<div></div>
		</Drawer>
	);
};

export default BigNavbar;
