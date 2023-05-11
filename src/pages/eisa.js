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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis luctus aliquet. Nunc rutrum augue vitae consectetur maximus. Cras rutrum quam nisi, ut dictum leo accumsan et. In hac habitasse platea dictumst. Nulla aliquam, augue et elementum ultrices, massa ligula aliquam sem, quis imperdiet mauris metus et nulla.
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
