import { Box, Typography, Container, Grid, Button } from '@mui/material';
import Vertical from '../vertical'
import faqBg from './../images/faq-bg.png'
import * as React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function page() {

  return (
    <Box id='contato' sx={{backgroundRepeat: 'no-repeat', backgroundPosition: 'center top', backgroundSize: 'cover', width:'100%', display: 'grid', backgroundImage: `url(${faqBg})`, minHeight:'5vh', color: 'white', fontWeight:'300', paddingBottom:'10vh'}}>
      <Container sx={{ gridArea: '1 / 1 / 2 / 2', justifyContent:'center', color: 'white', zIndex: 1, backgroundColor: "rgba(0,0,0,0.0)"}} >
      <Vertical/>
      <Box sx={{justifyContent:'center', display: 'flex', marginBottom: '5vh'}}>
        <Typography color='#FFC700'>
        Contato
        </Typography>
      </Box>

      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{backgroundColor: 'rgb(5,5,5)', border:1, borderColor:'rgb(15,15,15)', borderRadius:'10px', textAlign:'center', padding: '3vh'}}>
            <Typography variant='h6'>
              WHATSAPP
            </Typography>
            <Typography color='#43b561' variant='h2' sx={{margin:'3vh', marginBottom:'1vh'}}>
              <WhatsAppIcon fontSize='inherit'/>
            </Typography>
            <Typography fontWeight={300}>
            +55 11 91613-2999 
            </Typography><br/>
            <Typography>
              Fale conosco por mensagem de texto.
            </Typography>
            <Button color='yellowy' sx={{marginTop:'3vh'}} target="_blank" href='https://wa.me/5511916132999' variant="outlined">Enviar</Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{backgroundColor: 'rgb(5,5,5)', border:1, borderColor:'rgb(15,15,15)', borderRadius:'10px', textAlign:'center', padding: '3vh'}}>
            <Typography variant='h6'>
              E-MAIL
            </Typography>
            <Typography color='#c74c4c' variant='h2' sx={{margin:'3vh', marginBottom:'1vh'}}>
            <EmailIcon fontSize='inherit'/>
            </Typography>
            <Typography fontWeight={300}>
            yuriki.kizuna@gmail.com
            </Typography><br/>
            <Typography>
              Contate nosso grupo via um e-mail.
            </Typography>
            <Button color='yellowy' sx={{marginTop:'3vh'}} target="_blank" href='mailto:yuriki.kizuna@gmail.com' variant="outlined">ENVIAR</Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{backgroundColor: 'rgb(5,5,5)', border:1, borderColor:'rgb(15,15,15)', borderRadius:'10px', textAlign:'center', padding: '3vh'}}>
            <Typography variant='h6'>
              INSTAGRAM
            </Typography>
            <Typography color='#81418c' variant='h2' sx={{margin:'3vh', marginBottom:'1vh'}}>
            <InstagramIcon fontSize='inherit'/>
            </Typography>
            <Typography fontWeight={300}>
            @yuriki.kizuna
            </Typography><br/>
            <Typography>
              Veja as atualizações do nosso grupo.
            </Typography>
            <Button color='yellowy' sx={{marginTop:'3vh'}} target="_blank" href='https://www.instagram.com/yuriki.kizuna/' variant="outlined">Acessar</Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{backgroundColor: 'rgb(5,5,5)', border:1, borderColor:'rgb(15,15,15)', borderRadius:'10px', textAlign:'center', padding: '3vh'}}>
            <Typography variant='h6'>
              YOUTUBE
            </Typography>
            <Typography color='#c74c4c' variant='h2' sx={{margin:'3vh', marginBottom:'1vh'}}>
            <YouTubeIcon fontSize='inherit'/>
            </Typography>
            <Typography fontWeight={300}>
            Yuriki no Kizuna
            </Typography><br/>
            <Typography>
              Veja o conteúdo em vídeo do nosso grupo.
            </Typography>
            <Button color='yellowy' sx={{marginTop:'3vh'}} target="_blank" href='https://www.youtube.com/@yurikinokizunaeisadaiko9026' variant="outlined">Acessar</Button>
          </Box>
        </Grid>
      </Grid>
      
      </Container>
    </Box>
  );
}
export default page;
