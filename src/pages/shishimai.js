import { Grid, Box, Typography } from '@mui/material';
import Vertical from './../vertical'
import * as React from 'react';
import shishimai from './../images/shishimai.jpg';

function page() {

  return (
    <Box>
    <Vertical/>
    <Box sx={{justifyContent:'center', display: 'flex'}}>
        <Typography color='#FFC700'>
        O que é Shishimai?
        </Typography>
        </Box>
        <Box sx={{justifyContent:'center', display: 'flex'}}>
        </Box>
    <Grid sx={{my:'3vh'}} container columnSpacing={10}>
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
        <Typography variant='h6' fontWeight={300}>
        A poderosa e encantadora dança do leão, conhecida como <b>Shishimai</b> é a representação do <b>leão mitológico de Okinawa</b> por meio da dança.<br />
        Acredita-se que ao morder a cabeça de alguém, afasta-se o mal e a traz proteção.<br/>
        As coreografias do shishimai também foram
        modernizadas e criadas de forma autoral. Os
        movimentos típicos foram mantidos e
        respeitado o tradicional ritual para realizar a
        apresentação.<br/>
        Os shishis (leões) <b>sempre chamam a atenção
        por onde passam.</b> As apresentações são
        dinâmicas, cativando o público do começo ao
        fim. Fazendo com que ao assistir, desde o mais
        idoso volte a se <b>encantar</b> como uma criança ao
        ver uma criatura mitológica.<br/>
        Nossa maior satisfação é poder interagir com o
        público e receber toda a <b>energia e alegria
        daqueles que se conectaram conosco durante
        nossa apresentação</b>.
        </Typography>
        </Grid>
    </Grid>
    </Box>
  );
}
export default page;
