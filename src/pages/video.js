import { CardMedia, Box } from '@mui/material';
import * as React from 'react';

function page() {
  return (
    <Box id='video'>
        <CardMedia
        sx={{
          mt: '3vh',
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
