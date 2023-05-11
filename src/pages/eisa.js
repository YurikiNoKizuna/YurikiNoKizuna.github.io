import { Grid, Box, Typography } from '@mui/material';
import Vertical from './../vertical'
import * as React from 'react';
import eisa from './../images/eisa.png';

function page() {

  return (
    <Box sx={{minHeight:'60vh'}}>
    <Vertical/>
    <Box sx={{justifyContent:'center', display: 'flex'}}>
        <Typography color='yellow'>
        O que é Eisá?
        </Typography>
        </Box>
    <Grid sx={{my:'3vh'}} container spacing={2}>
        <Grid item xs={12} md={6}>
        <Typography id="sobre" sx={{my:'3vh'}} variant='h3'>
        O que é Eisá?
        </Typography>
        <Typography variant='h6' fontWeight={100}>
        O Eisá é uma dança popular onde os dançarinos tocam seus tambores ao som de músicas populares para homenagear seus antepassados no período do Obon (finados).
        </Typography>
        </Grid>
        <Grid item sx={{ display:'flex', alignItems:'center' }} xs={12} md={6}>
            <Box
              component="img"
              sx={{
                display:'flex', mx: 'auto', maxWidth: '100%'
              }}
              src={eisa}
            />
        </Grid>
    </Grid>
    </Box>
  );
}
export default page;
