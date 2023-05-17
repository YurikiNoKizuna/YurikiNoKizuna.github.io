import { Grid, Box, Typography } from '@mui/material';
import Vertical from './../vertical'
import * as React from 'react';
import shishimai from './../images/shishimai.jpeg';

function page() {

  return (
    <Box sx={{minHeight:'60vh'}}>
    <Vertical/>
    <Box sx={{justifyContent:'center', display: 'flex'}}>
        <Typography color='#FFC700'>
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
                display:'flex', mx: 'auto', maxWidth: '100%', maxHeight:'500px'
              }}
              src={shishimai}
            />
        </Grid>
        <Grid sx={{textAlign:'right'}} item xs={12} md={6}>
        <Typography id="sobre" sx={{my:'3vh'}} variant='h3'>
        O que é Shishimai?
        </Typography>
        <Typography variant='h6' fontWeight={100}>
        A poderosa e encantadora dança do leão, conhecida como <b>Shishimai</b> é a representação do <b>leão mitológico de Okinawa</b> por meio da dança.<br />
        Acredita-se que ao morder a cabeça de alguém, afasta-se o mal e a traz proteção.
        </Typography>
        </Grid>
    </Grid>
    </Box>
  );
}
export default page;
