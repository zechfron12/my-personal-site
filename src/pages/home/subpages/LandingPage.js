import React from 'react';
import { Typography } from '@mui/material';
import { subpageStyles, titleStyles, arrowStyle } from '../../../styles';
import { keyframes, styled } from '@mui/material/styles';
import KeyboardDoubleArrowDownRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowDownRounded';
import SmallNavbar from '../../../components/Navbar/NavabarVariants/SmallNavbar';

const downAnimation = keyframes`
	0% {
		transform: translate(0);
	}
	20% {
		transform: translateY(1rem);
	}
	40% {
		transform: translate(0);
	}
`;

const UpAndDown = styled('div')`
	animation: ${downAnimation} 1.5s infinite;
`;

const LandingPage = () => {
	return (
		<div
			style={{
				...subpageStyles.container,
				padding: '6rem 3rem 0rem 3rem',
				position: 'relative',
			}}
		>
			<Typography variant='h1' sx={titleStyles.mainTitle}>
				Hi,
			</Typography>
			<Typography variant='h1' sx={titleStyles.mainTitle}>
				I'm
				<span style={{ color: '#2cb67d' }}> Radu</span>,
			</Typography>
			<Typography variant='h1' sx={titleStyles.mainTitle}>
				Junior Web developer
			</Typography>
			<Typography
				variant='h4'
				sx={{ ...titleStyles.subTitle, margin: '4rem 0' }}
			>
				Student &amp; Front End Developer
			</Typography>
			<div
				style={{
					position: 'absolute',
					top: '82%',
					right: '1%',
					animation: 'down 1.5s infinite',
				}}
			>
				<UpAndDown>
					<KeyboardDoubleArrowDownRoundedIcon sx={arrowStyle} />
				</UpAndDown>
			</div>
		</div>
	);
};

export default LandingPage;
