import { Avatar, Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const box = [
  {
    image: '/images/E104.svg',
    name: 'Desirae Mango',
    comit: 'Community name',
    emoji: '/images/Heart.svg'
  },
  {
    image: '/images/E105.svg',
    name: 'Jaydon Schleifer',
    comit: 'Community name',
    emoji: '/images/Heart.svg'
  },
  {
    image: '/images/E106.svg',
    name: 'Randy Culhane',
    comit: 'Community name',
    emoji: '/images/Heart.svg'
  },
  {
    image: '/images/E107.svg',
    name: 'Ruben Culhane',
    comit: 'Community name',
    emoji: '/images/Heart.svg'
  },
  {
    image: '/images/E108.svg',
    name: 'Erin Septimus',
    comit: 'Community name',
    emoji: '/images/Heart.svg'
  },
]
function Profile() {
  return (
    <Stack>
      <Stack justifyContent='center' alignItems='center'>
        <Avatar sx={{ height: { md: '93px', xs: '200px' }, width: { md: '93px', xs: '200px' } }}>
          <img src='/images/E104.svg' height='100%' width='100%' />
        </Avatar>
        <Typography sx={{ fontWeight: 'bold', fontSize: { md: 15, xs: 40 } }}>
          Bijay Ranjan Pati
        </Typography>
        <Typography sx={{ fontSize: { md: 12, xs: 30 }, color: '#929292' }}>
          Utkal University
        </Typography>
        <Typography sx={{ color: '#929292', textAlign: 'center', mt: 1, fontSize: { md: 15, xs: 35 }, px: { md: 3, xs: 5 } }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum est mattis...
        </Typography>
        <Button variant='contained' sx={{ borderRadius: 4, bgcolor: '#EAF9DE', color: 'green', boxShadow: 'none', my: 2, fontSize: { xs: 20, md: 10 } }}>
          View Profile
        </Button>
      </Stack>
      <Divider />
      <Stack>
        <Typography sx={{ px: { xs: 9, md: 2 }, fontSize: { xs: 30, md: 17 }, mt: 2 }}>
          Favourites
        </Typography>
        <Stack justifyContent='center' alignItems='center' sx={{ px: { xs: 10, md: 2 }, }}>
          {box.map((each, pos) => {
            return (
              <Box sx={{
                display: 'flex', justifyContent: 'space-between', border: '1px solid gray', borderRadius: 2,
                p: 2, alignItems: 'center', width: '100%', my: { xs: 2, md: 1 },
              }}>
                <Avatar src={each.image} sx={{ height: { xs: '100px', md: '50px' }, width: { xs: '100px', md: '50px' } }} />
                <Box>
                  <Typography sx={{ fontSize: { xs: 30, md: 16 }, color: '#263238' }}>
                    {each.name}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: 24, md: 12 }, color: '#B1B1B1' }}>
                    {each.comit}
                  </Typography>
                </Box >
                <Stack sx={{ width: { xs: '40px', md: '20px' } }}>
                  <img src={each.emoji} />
                </Stack>
              </Box>
            )
          })
          }

        </Stack>
      </Stack>
    </Stack>

  )
}

export default Profile;