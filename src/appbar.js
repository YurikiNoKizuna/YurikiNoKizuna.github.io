import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-scroll'
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
              <Link to="sobre" smooth={true} duration={500} onClick={handleCloseNavMenu}>
              <MenuItem key={'Sobre'} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{'Sobre'}</Typography>
              </MenuItem>
              </Link>
              <Link to="galeria" smooth={true} duration={500} onClick={handleCloseNavMenu}>
              <MenuItem key={'Galeria'} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{'Galeria'}</Typography>
              </MenuItem>
              </Link>
              <MenuItem key={'Contato'} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{'Contato'}</Typography>
              </MenuItem>
              <MenuItem key={'FAQ'} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{'FAQ'}</Typography>
              </MenuItem>
            </Menu>
          </Box>
          
          <Box sx={{ justifyContent: 'center', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to="sobre" smooth={true} duration={500} onClick={handleCloseNavMenu}>
              <Button key={'Sobre'} sx={{ my: 2, color: 'white', display: 'block' }}>
                {'Sobre'}
              </Button>
            </Link>
            <Link to="galeria" smooth={true} duration={500} onClick={handleCloseNavMenu}>
              <Button key={'Galeria'} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                {'Galeria'}
              </Button>
            </Link>
            <Box
              component="img"
              sx={{
                display: { xs: 'none', md: 'flex' }, mr: 1,
                marginLeft:'2vh', marginRight:'2vh', width:'8vh'
              }}
              src={logoWhite}
            />
            <Link to="contato" smooth={true} duration={500} onClick={handleCloseNavMenu}>
              <Button key={'Contato'} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                {'Contato'}
              </Button>
            </Link>
            <Link to="faq" smooth={true} duration={500} onClick={handleCloseNavMenu}>
              <Button key={'FAQ'} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                {'FAQ'}
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
