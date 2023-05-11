import './App.css';
import background from './images/background.jpg';
import logoWhite from './images/logo-white.png';
import logoCenter from './images/logo-center.png';
import * as React from 'react';
import { Grid, Divider, Box, AppBar, Typography, Container, ThemeProvider } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Demo from './appbar';
import Vertical from './vertical';

const theme = {}

function App() {
  const content = (
    <div>
      {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.`}
    </div>
  );
  return (
    <div style={{ backgroundColor:'black', backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width:'100%', height:'100vh' }}>
      <ThemeProvider theme={theme}>
      <Demo />
        <Box
              component="img"
              sx={{
                display: 'flex', mt: '24vh', mb: '55vh', mx: 'auto', maxWidth: '100%'
              }}
              src={logoCenter}
            />

        <Container sx={{ position:'absolute', top:'100vh'}} style={{ justifyContent:'center', color: 'white', zIndex: 1, backgroundColor: "rgba(0,0,0,0.0)"}} >
        <Vertical/>
        <Box sx={{justifyContent:'center', display: 'flex'}}>
        <Typography color='yellow'>
        友力の絆エイサー太鼓
        </Typography>
        </Box>
        <Box sx={{justifyContent:'center', display: 'flex'}}>
        <Typography variant='h4'>
        Sobre
        </Typography>
        </Box>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis luctus aliquet. Nunc rutrum augue vitae consectetur maximus. Cras rutrum quam nisi, ut dictum leo accumsan et. In hac habitasse platea dictumst. Nulla aliquam, augue et elementum ultrices, massa ligula aliquam sem, quis imperdiet mauris metus et nulla.
        </Container>
        <div style={{height:'100vh'}}></div>
      </ThemeProvider>
    </div>
  );
}

export default App;
