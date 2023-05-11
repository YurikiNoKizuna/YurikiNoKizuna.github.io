import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import logoWhite from './images/logo-white.png';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar style={{ backgroundColor: 'rgba(0,0,0,0)', boxShadow:'none'}} position="absolute">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem key={'Sobre'} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{'Sobre'}</Typography>
              </MenuItem>
              <MenuItem key={'Galeria'} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{'Galeria'}</Typography>
              </MenuItem>
              <MenuItem key={'Contato'} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{'Contato'}</Typography>
              </MenuItem>
              <MenuItem key={'FAQ'} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{'FAQ'}</Typography>
              </MenuItem>
            </Menu>
          </Box>
          
          <Box sx={{ justifyContent: 'center', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button key={'Sobre'} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              {'Sobre'}
            </Button>
            <Button key={'Galeria'} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              {'Galeria'}
            </Button>
            <Box
              component="img"
              sx={{
                display: { xs: 'none', md: 'flex' }, mr: 1,
                marginLeft:'2vh', marginRight:'2vh', width:'8vh'
              }}
              src={logoWhite}
            />
            <Button key={'Contato'} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              {'Contato'}
            </Button>
            <Button key={'FAQ'} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
              {'FAQ'}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
