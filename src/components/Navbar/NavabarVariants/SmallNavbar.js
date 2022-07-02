import React, { useState } from 'react';

import { IconButton } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

import { mainNavbarItems } from '../consts/listItems';
import { navbarStyles } from '../../../styles';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/Close';

const SmallNavbar = () => {
	const navigate = useNavigate();

	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<IconButton
				aria-label='open drawer'
				onClick={handleDrawerOpen}
				edge='start'
				sx={{
					...navbarStyles.openButton,
				}}
			>
				<MenuRoundedIcon sx={navbarStyles.menuIcon} />
			</IconButton>
			<Drawer
				sx={{
					...navbarStyles.smallDrawer,
				}}
				variant='persistent'
				anchor='left'
				open={open}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						background: '#16161a',
					}}
				>
					<Link href='/' sx={{ display: 'inline' }}>
						<img
							src={require('../../../assets/mylogo.png')}
							alt='logo'
							width={200}
							height={200}
						/>
					</Link>
					<IconButton
						onClick={handleDrawerClose}
						sx={{
							...navbarStyles.openButton,
						}}
					>
						<CloseIcon sx={navbarStyles.menuIcon} />
					</IconButton>
				</div>
				<List>
					{mainNavbarItems.map((item, index) => (
						<div>
							<ListItem
								button
								key={item.id}
								disablePadding
								onClick={() => navigate(item.route)}
							>
								<ListItemButton>
									<ListItemIcon sx={navbarStyles.icons}>
										{item.icon}
									</ListItemIcon>
									<ListItemText
										primary={item.label}
										sx={{ display: 'inline' }}
									/>
								</ListItemButton>
							</ListItem>
						</div>
					))}
				</List>
				<div></div>
			</Drawer>
		</div>
	);
};

export default SmallNavbar;
