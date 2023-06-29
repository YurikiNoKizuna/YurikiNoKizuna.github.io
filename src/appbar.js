import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-scroll'
import logoWhite from './images/logo-white-crop.png';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function ResponsiveAppBar() {

  return (
    <AppBar style={{ backgroundImage:'none', backgroundColor: 'rgba(0,0,0,0)', boxShadow:'none'}} position="absolute">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Box sx={{ justifyContent: 'center', flexGrow: 1, display: { xs: 'none', sm: 'flex' }, height: '70px', padding: '3vh' }}>
            <Link to="sobre" smooth={true} duration={500} >
              <Button key={'Sobre'} sx={{ textTransform:'none', fontSize:'1.5rem', my: 2, color: 'white', display: 'block', width:'103.6px' }}>
                {'Sobre'}
              </Button>
            </Link>
            <Link to="galeria" smooth={true} duration={500} >
              <Button key={'Galeria'}  sx={{ textTransform:'none', fontSize:'1.5rem', my: 2, color: 'white', display: 'block', width:'115.16px' }}>
                {'Galeria'}
              </Button>
            </Link>
            <Box
              component="img"
              sx={{
                marginLeft:'3vh', marginRight:'3vh', maxHeight:'100%'
              }}
              src={logoWhite}
            />
            <Link to="feedbacks" smooth={true} duration={500} >
              <Button key={'Feedbacks'} sx={{ textTransform:'none', fontSize:'1.5rem', my: 2, color: 'white', display: 'block' }}>
                {'Feedbacks'}
              </Button>
            </Link>
            <Link to="contato" smooth={true} duration={500} >
              <Button key={'Contato'}  sx={{ textTransform:'none', fontSize:'1.5rem', my: 2, color: 'white', display: 'block' }}>
                {'Contato'}
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
