import { Box, Typography, Container } from '@mui/material';
import Vertical from './../vertical'
import FaqComponent from './../faqcomponent'
import faqBg from './../images/faq-bg.png'
import mask from './../images/mask.png'
import * as React from 'react';

function page() {

  return (
    <Box id='faq' sx={{display: 'grid', backgroundImage: `url(${faqBg})`, minHeight:'5vh', color: 'white', fontWeight:'300', paddingBottom:'3vh'}}>
        <Box
              component="img"
              sx={{
                gridArea: '1 / 1 / 2 / 2', marginLeft: '5vh', height:'80%', my: 'auto',
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'none',
                  lg: 'block'
                }
              }}
              src={mask}
            />
      <Container sx={{ gridArea: '1 / 1 / 2 / 2', justifyContent:'center', color: 'white', zIndex: 1, backgroundColor: "rgba(0,0,0,0.0)"}} >
      <Vertical/>
      <Box sx={{justifyContent:'center', display: 'flex', marginBottom: '5vh'}}>
        <Typography color='#FFC700'>
        Perguntas frequentes
        </Typography>
      </Box>

      <FaqComponent />
      </Container>
    </Box>
  );
}
export default page;
