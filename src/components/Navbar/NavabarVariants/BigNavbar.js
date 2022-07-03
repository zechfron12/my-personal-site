import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Typography } from '@mui/material';
import { mainNavbarItems } from '../consts/listItems';
import { navbarStyles } from '../../../styles';
import { useNavigate } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

const BigNavbar = () => {
	const navigate = useNavigate();

	return (
		<Drawer
			sx={{
				...navbarStyles.drawer,
			}}
			variant='permanent'
			anchor='left'
		>
			<div style={{ background: '#16161a' }}>
				<a href='/'>
					<img
						src={require('../../../assets/mylogo.png')}
						alt='logo'
						style={{
							height: '100%',
							width: '100%',
							objectFit: 'contain',
						}}
					/>
				</a>
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
				<div style={{ marginBottom: '100px' }}></div>
			</List>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-evenly',
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
	);
};

export default BigNavbar;
