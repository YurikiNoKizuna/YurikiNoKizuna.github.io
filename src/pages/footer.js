import { Grid, Box, Typography, Divider, IconButton, Stack, Link } from '@mui/material';
import logoJapanese from './../images/logo-japanese.png'
import logoWhite from './../images/logo-white-crop.png'
import * as React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function page() {

  return (
    <Box sx={{ zIndex:'-100', textAlign:'center', bgcolor: '#28072E', minHeight:'40vh', fontWeight:'100'}}>
      <Stack sx={{ zIndex:'100', paddingTop:'6vh', color:'white',justifyContent:'center', display:'flex'}} direction="row" alignItems="center" spacing={5}>
        <IconButton component={Link} target="_blank" href='https://www.instagram.com/yuriki.kizuna/' size='small' sx={{ zIndex:'100', bgcolor:'white', color:'#28072E'}}>
          <InstagramIcon/>
        </IconButton>
        <IconButton component={Link} target="_blank" href='https://www.youtube.com/@yurikinokizunaeisadaiko9026' size='small' sx={{ zIndex:'100', bgcolor:'white', color:'#28072E'}}>
          <YouTubeIcon />
        </IconButton>
        <IconButton component={Link} target="_blank" href='https://www.flickr.com/photos/195971224@N04/albums' size='small' sx={{ zIndex:'100', bgcolor:'white', color:'#28072E'}}>
          <PhotoLibraryIcon />
        </IconButton>
        <IconButton component={Link} target="_blank" href='https://wa.me/5511916132999' size='small' sx={{ zIndex:'100', bgcolor:'white', color:'#28072E'}}>
          <WhatsAppIcon />
        </IconButton>
      </Stack>
      <br />
      <Box component="img" sx={{ zIndex:'1', width:'30vh', opacity:'0.1', position: 'absolute', marginTop:'-10vh'}} src={logoWhite} />
      <Box component="img" sx={{ marginTop:'3vh', width:'30vh'}} src={logoJapanese} />
      <Divider variant='middle' sx={{ my:'5vh', bgcolor:'white', width: '90%'}} />
      <Typography sx={{paddingBottom:'5vh'}} fontSize={12} color={'white'}>
        © 2023 Todos os direitos reservados
      </Typography>
    </Box>
  );
}
export default page;
