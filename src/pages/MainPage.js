import { Box, Chip, Divider, Grid, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import CardPage from '../../component/CardPage.js';

const categoryList = [
	'All', 'Gossip', 'Tech', 'Politics', 'Sports', 'Health', 'Movie'
]
const posts = [
	{
		caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum est mattisinteger neque vel ipsum.',
		postedBy: 'Bijay Ranjan Pati',
		postedAt: '2 Hours Ago',
		category: 'Gossip',
		vote: 300,
		voteType: 'upvote',
		comments: 400,
		share: 240,
		userDp: '/images/user-image.png',
		image: '/images/post-image.png',
	},
	{
		caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum est mattisinteger neque vel ipsum.',
		postedBy: 'Guru Prasad',
		postedAt: '5 Hours Ago',
		category: 'Movie',
		vote: 454,
		voteType: 'upvote',
		comments: 232,
		share: 444,
		userDp: '/images/user-image.png',
		image: '/images/post-image.png',
	},
	{
		caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum est mattisinteger neque vel ipsum.',
		postedBy: 'Abhijeet Mohapatra',
		postedAt: '5 Hours Ago',
		category: 'Tech',
		vote: 566,
		voteType: 'upvote',
		comments: 400,
		share: 240,
		userDp: '/images/user-image.png',
		image: '/images/post-image.png',
	},
	{
		caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum est mattisinteger neque vel ipsum.',
		postedBy: 'Ramakanta Kar',
		postedAt: '6 Hours Ago',
		category: 'Tech',
		vote: 756,
		voteType: 'upvote',
		comments: 400,
		share: 240,
		userDp: '/images/user-image.png',
		image: '/images/post-image.png',
	},
	{
		caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum est mattisinteger neque vel ipsum.',
		postedBy: 'Biswa Ranjan',
		postedAt: '8 Hours Ago',
		category: 'Health',
		vote: 877,
		voteType: 'upvote',
		comments: 400,
		share: 240,
		userDp: '/images/user-image.png',
		image: '/images/post-image.png',
	},
	{
		caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum est mattisinteger neque vel ipsum.',
		postedBy: 'Sunil Kumar Muduli',
		postedAt: '10 Hours Ago',
		category: 'Politics',
		vote: 456,
		voteType: 'upvote',
		comments: 400,
		share: 240,
		userDp: '/images/user-image.png',
		image: '/images/post-image.png',
	},
	{
		caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum est mattisinteger neque vel ipsum.',
		postedBy: 'Soumya Ranjan',
		postedAt: '11 Hours Ago',
		category: 'Gossip',
		vote: 300,
		voteType: 'upvote',
		comments: 400,
		share: 240,
		userDp: '/images/user-image.png',
		image: '/images/post-image.png',
	},
	{
		caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum est mattisinteger neque vel ipsum.',
		postedBy: 'Sai Swarup',
		postedAt: '12 Hours Ago',
		category: 'Gossip',
		vote: 300,
		voteType: 'upvote',
		comments: 400,
		share: 240,
		userDp: '/images/user-image.png',
		image: '/images/post-image.png',
	},
	{
		caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum est mattisinteger neque vel ipsum.',
		postedBy: 'Bijay Ranjan',
		postedAt: '12 Hours Ago',
		category: 'Movie',
		vote: 300,
		voteType: 'upvote',
		comments: 400,
		share: 240,
		userDp: '/images/user-image.png',
		image: '/images/post-image.png',
	}

]

function MainPage() {
	/**
	 * all state defined here
	 */
	const [selectedCategory, setSelectedCategory] = useState('All');

	return (
		<Stack sx={{ width: { sm: '90%', md: '100%' }, }}>
		<Stack sx={{bgcolor:'white'}}>
			<Box
				sx={{
					mt: 4,
				}}
			>
				<Typography
					variant='h4'
					color={'primary'}
					sx={{fontWeight: '700',}}>
					Kemnu
				</Typography>
				<Typography variant='subtitle2'>
					Welcome Back, <b>Bijay</b>
				</Typography>
			</Box>
		</Stack>
		<Divider />
		<Stack>
			<Box
				sx={{
					mt: 5,mb: 2,pl: 5,
				}}
			>
				<Stack direction={'row'} spacing={2}>
					{categoryList?.map((each, index) => {
						return (
							<Chip
								label={each}
								variant={each === selectedCategory ? 'filled' : 'outlined'}
								color='primary'
								backgroundColor={
									each === selectedCategory ? '#4B1C7C' : '#F7E2FF'
								}
								sx={{py: 2,px: 1,}}
								onClick={() => {
									setSelectedCategory(each);
								}}
							/>
						);
					})}
				</Stack>
			</Box>
			<Stack>
				<Divider />
			</Stack>
			<Box>
				<Grid container>
					{posts?.map((post) => {
						return (
							<Grid item md={6}>
								<Box sx={{ width: '99%', pl: 5, py: 2 }}>
									<CardPage post={post} />
								</Box>
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</Stack>
		</Stack>
	);
}

export default MainPage;
