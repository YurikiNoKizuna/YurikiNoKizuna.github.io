import { Grid, Box, Typography } from '@mui/material';
import Vertical from './../vertical'
import * as React from 'react';
import logoWhite from './../images/logo-white-crop.png'
import sobre from './../images/sobre.png';

function page() {

  return (
    <Box id='sobre' sx={{minHeight:'60vh'}}>
    <Vertical/>
    <Box sx={{textAlign:'center'}}>
    </Box>
    <Box sx={{justifyContent:'center', display: 'flex'}}>
        <Typography color='yellow'>
        友力の絆エイサー太鼓
        </Typography>
    </Box>
    
    <Grid sx={{my:'3vh'}} container spacing={2}>
        <Grid item xs={12} md={6}>
        <Typography sx={{my:'3vh'}} variant='h3'>
        Quem somos?
        </Typography>
        <Box component="img" sx={{ zIndex:'-1', width:{xs:'70%', md:'40%', lg:'30%'}, opacity:'0.1', position:'absolute', marginLeft:'auto', marginRight:'auto', left: 0, right: 0, textAlign:'center', marginTop:'-2vh'}} src={logoWhite} />
        <Typography variant='h6' fontWeight={100}>
        O grupo Yuriki no Kizuna Eisá Daiko (Grupo de Eisá Taiko
Laços de Amizade) foi fundado por Toshiyuki Yamauchi
em 2022, na cidade de São Paulo e conta com 40
membros.
O grupo surgiu através da união entre jovens
descendentes e simpatizantes da comunidade
okinawana com o intuito de manter e difundir a cultura e
valores de seus antepassados.
Apesar de sua recente fundação, o grupo se apresentou
com grandes perfomances em diversos eventos da
comunidade nikkey na cidade de São Paulo, no interior, e
em outros estados, consolidando sua existência atráves
de grandes apresentações dos tambores e da dança do
leão conhecida como shishimai.
</Typography>
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
