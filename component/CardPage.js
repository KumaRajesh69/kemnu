import {
	Avatar,
	Box,
	Button,
	Card,
	CardActionArea,
	CardContent,
	CardHeader,
	CardMedia,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';

import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Profile from './profile';

const DrawerWidth = 100;
function CardPage({ post }) {

	const [open, setOpen] = useState(false);
	const handleDrawer = () => {
		setOpen(!open);
	}


	return (

		<>
			<Box
				sx={{
					width: '100%',
					p: 2,
					border: '1px solid #DCDCDC',
					borderRadius: '2px',
				}}
			>
				<CardHeader
					avatar={
						<Avatar
							src='/images/user-img.png'
							aria-label='user'
							sx={{
								height: '40px',
							}}
							onClick = {handleDrawer}
						></Avatar>
					}
					action={
						<IconButton aria-label='settings'>
							<MoreHorizIcon />
						</IconButton>
					}
					title={
						<Stack direction={'row'} alignItems={'center'}>
							<Typography variant='body1' sx={{ fontWeight: 600 }}>
								{post?.postedBy}
							</Typography>
							<Stack
								sx={{
									pl: 1.5,
									height: '100%',
								}}
							>
								<img
									src='/images/V64.svg'
									alt='forward-icon'
									height={'25px'}
									width={'25px'}
								/>
							</Stack>
							<Typography
								variant='h6'
								color={'primary'}
								sx={{
									pl: 1.5,
									fontWeight: 600
								}}
							>
								{post?.category}
							</Typography>
						</Stack>
					}
					subheader={post?.postedAt}
				/>

				<Card sx={{ maxWidth: 450, pl: 1.5 }}>
					<CardContent sx={{ mt: -2 }}>
						<Typography variant='body2' color='#6B6B6B'>
							{post?.caption}
						</Typography>
					</CardContent>
					<CardMedia
						component='img'
						height='270px'
						image='/images/R1146.svg'
						alt='post'
						sx={{
							borderRadius: '5px',
						}}
					/>
				</Card>
				<Stack
					direction={'row'}
					justifyContent={'space-between'}
					alignItems={'center'}
				>
					<Stack direction={'row'}>
						<IconButton>
							<ExpandLessIcon
								sx={{
									color: '#4CA441',
									fontSize: '60px',
								}}
							/>
							<Typography color='#4CA441'>{post?.vote}</Typography>
						</IconButton>
						<IconButton>
							<ExpandMoreIcon
								sx={{
									fontSize: '60px',
								}}
							/>
						</IconButton>
						<IconButton>
							<img src='/images/Path2237.svg' height={'35px'} width={'37px'} />
							<Typography sx={{ ml: 1 }}>{post?.comments}</Typography>
						</IconButton>
					</Stack>
					<Box>
						<IconButton>
							<img src='/images/share.svg' height={'35px'} width={'37px'} />
							<Typography sx={{ ml: 1 }}> {post?.share}</Typography>
						</IconButton>
					</Box>
				</Stack>
			</Box>
			<Box sx={{width:'10%'}}>

			<Drawer
				anchor = 'right'
				open={open}
				onClose={handleDrawer}
				sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width:{xs:'100%',sm: 300} },}}
			>
			<Profile />
			</Drawer>
			</Box>

		</>
	);
}

export default CardPage;
