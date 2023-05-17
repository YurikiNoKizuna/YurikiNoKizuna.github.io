import background from './images/background-min.jpeg';
import logoCenter from './images/logogroup.png';
import * as React from 'react';
import { Box, Container, createTheme, ThemeProvider } from '@mui/material';
import { Link } from 'react-scroll'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Demo from './appbar';
import Video from './pages/video';
import Sobre from './pages/sobre';
import Eisa from './pages/eisa';
import Shishimai from './pages/shishimai';
import Galeria from './pages/galeria'
import Feedbacks from './pages/feedbacks'
import Footer from './pages/footer'
import './style.scss';

const theme = createTheme({
  typography: {
    fontFamily: 'Titillium Web'
  },
  palette: {
    mode: 'dark',
  },
})

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

        <Link to="video" smooth={true} duration={500} >
          <div style={{position:'absolute', zIndex:'100', top:'33vh'}} class="container">
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
          </div>
        </Link>

        

        <Container sx={{ justifyContent:'center', color: 'white', zIndex: 1, backgroundColor: "rgba(0,0,0,0.0)"}} >
        <Video />
        <Sobre />
        <Shishimai />
        <Eisa />
        <Galeria />
        <Feedbacks />
        </Container>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
