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
    <Grid sx={{my:'3vh'}} container rowSpacing={4} columnSpacing={10}>
        <Grid item xs={12} md={6}>
        <Typography id="sobre" sx={{my:'3vh'}} variant='h3'>
        O que é Eisá?
        </Typography>
        <Typography variant='h6' fontWeight={300}>
        O <b>Eisá</b> é uma dança artística de Okinawa, em que os dançarinos tocam seus poderosos <b>tambores</b> ao som de músicas populares, criando um <b>espetáculo cheio de energia</b>.<br />Esta arte surgiu
        tradicionalmente para homenagear os antepassados no período do Obon (finados). <br />
        O estilo do grupo é o <b>Eisá moderno, conhecido
        como Sousaku</b>. Os movimentos são mais
        dinâmicos e as músicas modernas, mas nem
        por isso deixamos nossas origens de lado.<br />
        Todo esse sentimento e felicidade de tocar e se conectar aos propósitos do grupo, transborda não só
        durante a apresentação, mas também com
        grande <b>interatividade e conexão que fazemos
        com o público</b>.
        </Typography>
        </Grid>
        <Grid item sx={{ display:'flex', alignItems:'center' }} xs={12} md={6}>
            <Box
              component="img"
              sx={{
                marginRight: '0', maxWidth: '100%', float:'right', margin: '0 auto'
              }}
              src={eisa}
            />
        </Grid>
    </Grid>
    </Box>
  );
}
export default page;
