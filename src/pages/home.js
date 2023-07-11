import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MainPage from './MainPage';
import { Button, Card, CardContent, Stack } from '@mui/material';

const drawerWidth = 100;



const list = [

  {
    icon: '/images/Category.svg'
  },
  {
    icon: '/images/Chat.svg'
  },
  {
    icon: '/images/User.svg'
  },
  {
    icon: '/images/Notification.svg'
  },
  {
    icon: '/images/Setting.svg'
  },

]
function Home(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Stack sx={{ justifyContent: 'center', alignItems: 'center', position: 'fixed' }}>
      <Box sx={{ mt: 8 }}>
        <img src='/images/KemNu.svg' height='51px' width='40px' />
      </Box>
      {
        list.map((each, pos) => {
          return (
            <Stack sx={{ my: '20px' }}>
              <Button>
                <img src={each.icon} height='33px' width='33px' />
              </Button>
            </Stack>
          )
        })
      }
      <Box sx={{ mt: 8 }}>
        <img src='/images/Logout.svg' height='33px' width='33px' />
      </Box>
    </Stack>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>

      <Box sx={{ display: 'flex', mx: 2, }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: 'none' }, }}
        ><Box sx={{ ml: 2 }}>
            <MenuIcon />
          </Box>
        </IconButton>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, bgcolor: 'white', }}
        >
          <Box sx={{ bgcolor: 'white' }}>
            <MainPage />
          </Box>
        </Box>
      </Box>
    </>
  );
}


export default Home;