import { CardMedia, Box, Typography } from '@mui/material';
import Vertical from './../vertical'
import * as React from 'react';

function page() {
  return (
    <Box>
    <Vertical/>
    <Box sx={{justifyContent:'center', display: 'flex'

  }}>
        <Typography color='yellow'>
        Trailer
        </Typography>
        </Box>
        <CardMedia
        sx={{
          width:'100%',
          height:'70vh',
          border: 'none'
        }}
  component="iframe"
  image="https://www.youtube.com/embed/gglXICztlco"
/>

    </Box>
  );
}
export default page;
