import background from './images/background.jpeg';
import logoCenter from './images/logo-center.png';
import * as React from 'react';
import { Box, Typography, Container, ThemeProvider } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Demo from './appbar';
import Sobre from './pages/sobre';
import Eisa from './pages/eisa';
import Shishimai from './pages/shishimai';

const theme = {}

function App() {
  return (
    <div style={{ backgroundColor:'black', backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', width:'100%', height:'100vh' }}>
      <ThemeProvider theme={theme}>
      <Demo/>
        <Box
        sx={{
          display: 'flex', my:'auto', height:'100vh', justifyContent:'center', alignItems:'center'
        }}>
          <Box
                component="img"
                sx={{
                  display: 'flex', mx: 'auto', maxWidth: '100%'
                }}
                src={logoCenter}
              />
        </Box>

        <Container sx={{ justifyContent:'center', color: 'white', zIndex: 1, backgroundColor: "rgba(0,0,0,0.0)"}} >
        <Sobre />
        <Shishimai />
        <Eisa />
        </Container>
        <div style={{height:'100vh'}}></div>
      </ThemeProvider>
    </div>
  );
}

export default App;
