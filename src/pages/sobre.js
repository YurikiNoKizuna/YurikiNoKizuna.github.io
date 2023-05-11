import { Grid, Box, Typography } from '@mui/material';
import Vertical from './../vertical'
import * as React from 'react';
import sobre from './../images/sobre.png';

function page() {

  return (
    <Box id='sobre' sx={{minHeight:'60vh'}}>
    <Vertical/>
    <Box sx={{justifyContent:'center', display: 'flex'}}>
        <Typography color='yellow'>
        友力の絆エイサー太鼓
        </Typography>
        </Box>
        <Box sx={{justifyContent:'center', display: 'flex'}}>
        </Box>
    <Grid sx={{my:'3vh'}} container spacing={2}>
        <Grid item xs={12} md={6}>
        <Typography sx={{my:'3vh'}} variant='h3'>
        Quem somos?
        </Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis luctus aliquet. Nunc rutrum augue vitae consectetur maximus. Cras rutrum quam nisi, ut dictum leo accumsan et. In hac habitasse platea dictumst. Nulla aliquam, augue et elementum ultrices, massa ligula aliquam sem, quis imperdiet mauris metus et nulla.
        </Grid>
        <Grid item sx={{ display:'flex', alignItems:'center' }} xs={12} md={6}>
            <Box
              component="img"
              sx={{
                display:'flex', mx: 'auto', maxWidth: '100%'
              }}
              src={sobre}
            />
        </Grid>
    </Grid>
    </Box>
  );
}
export default page;
