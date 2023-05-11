import { Grid, Box, Typography } from '@mui/material';
import Vertical from './../vertical'
import * as React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import a0 from './../images/galeria/0.jpg';
import a1 from './../images/galeria/a1.JPG';
import a2 from './../images/galeria/a2.JPG';
import a3 from './../images/galeria/a3.JPG';
import a4 from './../images/galeria/a4.JPG';
import a5 from './../images/galeria/a5.JPG';
import a6 from './../images/galeria/a6.JPG';
import a7 from './../images/galeria/a7.JPG';
import a8 from './../images/galeria/a8.JPG';
import a9 from './../images/galeria/a9.JPG';
import a10 from './../images/galeria/a10.JPG';
import a11 from './../images/galeria/a11.JPG';


function page() {

  return (
    <Box id='galeria' sx={{minHeight:'60vh'}}>
    <Vertical/>
    <Box sx={{justifyContent:'center', display: 'flex'}}>
        <Typography color='yellow'>
        Galeria
        </Typography>
        </Box>
    <Grid sx={{my:'3vh'}} container spacing={2}>
        

    <OwlCarousel className='owl-theme' loop margin={10} nav>
        <div class='item'>
            <Box component="img" sx={{ height: '50%' }} src={a0} />
        </div>
        <div class='item'>
          <Box component="img" sx={{ height: '50%' }} src={a1} />
        </div>
        <div class='item'>
            <Box component="img" sx={{ height: '50%' }} src={a2} />
        </div>
        <div class='item'>
            <Box component="img" sx={{ height: '50%' }} src={a3} />
        </div>
        <div class='item'>
            <Box component="img" sx={{ height: '50%' }} src={a4} />
        </div>
        <div class='item'>
            <Box component="img" sx={{ height: '50%' }} src={a5} />
        </div>
        <div class='item'>
            <Box component="img" sx={{ height: '50%' }} src={a6} />
        </div>
        <div class='item'>
            <Box component="img" sx={{ height: '50%' }} src={a7} />
        </div>
        <div class='item'>
            <Box component="img" sx={{ height: '50%' }} src={a8} />
        </div>
        <div class='item'>
            <Box component="img" sx={{ height: '50%' }} src={a9} />
        </div>
        <div class='item'>
            <Box component="img" sx={{ height: '50%' }} src={a10} />
        </div>
        <div class='item'>
            <Box component="img" sx={{ height: '50%' }} src={a11} />
        </div>
    </OwlCarousel>


    </Grid>
    </Box>
  );
}
export default page;
