import background from './images/background-min.jpeg';
import logoCenter from './images/logogroup.png';
import logosimples from './images/logo-center.png';
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
import Galeria2 from './pages/galeria2'
import Feedbacks from './pages/feedbacks'
import Faq from './pages/contato'
import Footer from './pages/footer'
import './style.scss';

const theme = createTheme({
  typography: {
    fontFamily: 'Titillium Web'
  },
  palette: {
    mode: 'dark',
    yellowy: {
      main: '#FFC700',
    },
  },
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundImage: 'radial-gradient(circle, white, rgba(187, 0, 255, 0.15))',
          backgroundColor: 'white',
          margin: '18px 0px',
          color: '#020000',
          borderRadius: '16px',
          '&:first-of-type': {
            borderRadius: '16px'
          },
          '&:last-of-type': {
            borderRadius: '16px'
          },
          '&:before': {
            display: 'none',
          }
        },
        rounded: {
          padding: '0px 18px'
        }
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          margin: '18px 0px'
        },
        expandIconWrapper: {
          color: '#020000'
        },
      },
    }
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
          <Box component="img" sx={{ mx: 'auto', maxWidth: '100%', display: {xs: 'none', sm: 'block'} }} src={logosimples} />
          <Box component="img" sx={{ mx: 'auto', maxWidth: '100%', display: {xs: 'block', sm: 'none'} }} src={logoCenter} />
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
        <Galeria2 />
        <Feedbacks />
        </Container>
        <Faq />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
