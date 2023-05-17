import { Grid, Box, Typography } from '@mui/material';
import Vertical from './../vertical'
import * as React from 'react';
import eisa from './../images/eisa.png';

function page() {

  return (
    <Box sx={{minHeight:'60vh'}}>
    <Vertical/>
    <Box sx={{justifyContent:'center', display: 'flex'}}>
        <Typography color='#FFC700'>
        O que é Eisá?
        </Typography>
        </Box>
    <Grid sx={{my:'3vh'}} container spacing={2}>
        <Grid item xs={12} md={6}>
        <Typography id="sobre" sx={{my:'3vh'}} variant='h3'>
        O que é Eisá?
        </Typography>
        <Typography variant='h6' fontWeight={100}>
        O <b>Eisá</b> é uma dança artística de Okinawa, em que os dançarinos tocam seus poderosos <b>tambores</b> ao som de músicas populares, criando um <b>espetáculo cheio de energia</b>.<br />Esta arte surgiu
        tradicionalmente para homenagear os antepassados no período do Obon (finados).
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
