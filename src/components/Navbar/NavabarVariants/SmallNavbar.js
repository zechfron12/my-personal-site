import React, { useEffect, useState } from 'react';

import { IconButton } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import { mainNavbarItems } from '../consts/listItems';
import { navbarStyles } from '../../../styles';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

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
								onClick={() => navigate(item.route)}
								disablePadding
							>
								<ListItemButton
									sx={{
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'center',
									}}
								>
									{item.icon}
									<Typography>{item.label}</Typography>
								</ListItemButton>
							</ListItem>
						</div>
					))}
				</List>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						marginBottom: '50px',
					}}
				>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.linkedin.com/in/radu-chelaru'
					>
						<LinkedInIcon sx={navbarStyles.icons} />
					</a>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://github.com/zechfron12'
					>
						<GitHubIcon sx={navbarStyles.icons} />
					</a>
					<a
						target='_blank'
						rel='noreferrer'
						href='https://www.facebook.com/radu.chelaru.14'
					>
						<FacebookIcon sx={navbarStyles.icons} />
					</a>
				</div>
			</Drawer>
		</div>
	);
};

export default SmallNavbar;
