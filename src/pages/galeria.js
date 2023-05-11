import { Grid, Box, Typography } from '@mui/material';
import Vertical from './../vertical'
import * as React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./../images/galeria/', false, /\.(png|jpe?g|svg|JPG)$/));

function page() {
  return (
    <Box id='galeria'>
    <Vertical/>
    <Box sx={{justifyContent:'center', display: 'flex'}}>
        <Typography color='yellow'>
        Galeria
        </Typography>
        </Box>
    <Grid sx={{my:'3vh'}} container spacing={2}>
        

    <OwlCarousel items={2} dots={false} autoplay autoplayTimeout={3000} className='owl-theme' loop margin={10} nav>
        {images.map((image) => (
              <div class='item'>
                <Box component="img" src={image} />
              </div>
        ))}
    </OwlCarousel>


    </Grid>
    </Box>
  );
}
export default page;
