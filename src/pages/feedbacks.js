import { Grid, Box, Typography } from '@mui/material';
import Vertical from './../vertical'
import * as React from 'react';
import f1 from './../images/f1.png';
import f2 from './../images/f2.png';

function page() {

  return (
    <Box sx={{minHeight:'60vh', color: 'white'}}>
    <Vertical/>
    <Box sx={{justifyContent:'center', display: 'flex'}}>
        <Typography color='yellow'>
        Feedbacks
        </Typography>
        </Box>
    <Grid sx={{my:'3vh'}} container spacing={2}>
          <Grid item sx={{ display:'flex', alignItems:'center' }} xs={12} md={6}>
            <Box
              component="img"
              sx={{
                display:'flex', mx: 'auto', maxWidth: '100%'
              }}
              src={f1}
            />
        </Grid>
        <Grid item xs={12} md={6}>
        <Typography sx={{ mx:'2xh', ml:'1vh', mb:'3vh', fontWeight:'100'}} variant='h6'>
        “A participação do grupo Yuriki no Kizuna Eisá Daiko foi extremamente profissional. Nós, da Organização do Festival da Cultura Japonesa de Salvador, só temos a agradecer aos integrantes do grupo pela postura exemplar adotada em cada um dos momentos que envolveu a participação. Sua apresentação abrilhantou o Festival, agradando todo público presente."''
        </Typography>
        <Typography sx={{ mx:'2xh', ml:'1vh', mb:'1vh'}} variant='h6'>
        Isa Toyota
        </Typography>
        <Typography sx={{ mx:'2xh', ml:'1vh', mb:'1vh'}} variant='h8'>
        Comissão Organizadora do Festival da Cultura Japonesa de Salvador
        </Typography>
        </Grid>
    </Grid>

    <Grid sx={{my:'3vh'}} container spacing={2}>
    <Grid sx={{textAlign:'right'}} item xs={12} md={6}>
        <Typography sx={{ mx:'2xh', mr:'1vh', mb:'3vh', fontWeight:'100'}} variant='h6'>
        “A Mostra Japão admira e parabeniza o trabalho do Grupo Yuriki no Kizuna. Sempre fazemos questão de ter os espetáculos deles em nossos eventos realizados, pois eles trazem em suas apresentações de taiko e shishimai, toda a emoção e carisma que queremos passar para o publico que vem prestigiar. Temos orgulho das nossas raízes Okinawa e ficamos muito felizes em ter encontrado um grupo tão dedicado e incrível."
        </Typography>
        <Typography sx={{ mx:'2xh', mr:'1vh', mb:'1vh'}} variant='h6'>
        Roseli Kanashiro
        </Typography>
        <Typography sx={{ mx:'2xh', mr:'1vh', mb:'1vh'}} variant='h8'>
        Organizadora do Evento Mostra Japão
        </Typography>
        </Grid>
          <Grid item sx={{ display:'flex', alignItems:'center' }} xs={12} md={6}>
            <Box
              component="img"
              sx={{
                display:'flex', mx: 'auto', maxWidth: '100%'
              }}
              src={f2}
            />
        </Grid>
    </Grid>
    </Box>
  );
}
export default page;