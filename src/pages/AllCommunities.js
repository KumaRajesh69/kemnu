import { Avatar, Card, CardMedia, CircularProgress, Grid, Stack, Typography } from '@mui/material'
import axios from 'axios';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'

function AllCommunities() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const { enqueueSnackbar } = useSnackbar();



    useEffect(() => {

        axios.get(
            'https://api.test.kemnu.com/v2/available-communities',
        )
            .then((response) => {
                const { data } = response;
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                const data = error?.response?.data
                enqueueSnackbar(data?.message || 'Something went wrong', {
                    variant: 'error',
                    anchorOrigin: {
                        horizontal: 'right',
                        vertical: 'bottom'
                    }
                });
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])



    return (
        <Stack sx={{ p: 3 }}>
            <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>
                All Communities
            </Typography>
            {loading?
            <Stack justifyContent='center' alignItems='center'>
            <CircularProgress /> 
            </Stack> : 
            <Grid container spacing={3} sx={{ px: 3, mt: 3 }}>
                {data.map((each, pos) => {
                    return (
                        <Grid item xs={12} sm={6} md={4}>
                            <Card height='332px' width='411px'>
                                <CardMedia>
                                    <Avatar variant='square' src={each.avatar} sx={{ width: '100%', height: 173 }}>
                                    </Avatar>
                                </CardMedia>
                                <Stack alignItems='center' sx={{ bgcolor: '#4194E6' }}>
                                    <Typography sx={{ color: '#FFFFFF' }}>
                                        {each.memberCount} members
                                    </Typography>
                                </Stack>
                                <Stack sx={{ px: 4, py: 2 }}>
                                    <Typography sx={{ fontSize: 18, fontWeight: 'bold', }}>
                                        {each.name} 
                                    </Typography>
                                    <Typography sx={{ fontSize: 16, mt: 0.5 }}>
                                        {each?.category?.name}
                                    </Typography>
                                    <Typography sx={{ fontSize: 16, color: '#A5A5A5', mt: .5 }}>
                                        {each.city},{each.state},{each.country}
                                    </Typography>
                                    <Typography sx={{ fontSize: 18, fontWeight: 'bold', mt: .5 }}>
                                        {each.code}
                                    </Typography>
                                </Stack>
                            </Card>
                        </Grid>
                    )
                })
                }
            </Grid>}
        </Stack>
    )
}
export default AllCommunities