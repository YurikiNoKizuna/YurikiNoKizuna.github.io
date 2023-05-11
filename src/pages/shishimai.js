import { Grid, Box, Typography } from '@mui/material';
import Vertical from './../vertical'
import * as React from 'react';
import shishimai from './../images/shishimai.jpeg';

function page() {

  return (
    <Box sx={{minHeight:'60vh'}}>
    <Vertical/>
    <Box sx={{justifyContent:'center', display: 'flex'}}>
        <Typography color='yellow'>
        O que é Shishimai?
        </Typography>
        </Box>
        <Box sx={{justifyContent:'center', display: 'flex'}}>
        </Box>
    <Grid sx={{my:'3vh'}} container spacing={2}>
        <Grid sx={{ display:'flex', alignItems:'center' }} item xs={12} md={6}>
        <Box
              component="img"
              sx={{
                display:'flex', mx: 'auto', maxWidth: '100%'
              }}
              src={shishimai}
            />
        </Grid>
        <Grid sx={{textAlign:'right'}} item xs={12} md={6}>
        <Typography id="sobre" sx={{my:'3vh'}} variant='h3'>
        O que é Shishimai?
        </Typography>
        <Typography variant='h6' fontWeight={100}>
        A dança do leão, conhecida como Shishimai é a representação do leão mitológico de Okinawa por meio da dança e acredita-se que ao morder a cabeça de alguém, afasta o mal e traz proteção.
        </Typography>
        </Grid>
    </Grid>
    </Box>
  );
}
export default page;
