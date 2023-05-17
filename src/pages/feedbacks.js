import { Grid, Box, Typography, Divider } from '@mui/material';
import Vertical from './../vertical'
import * as React from 'react';
import f1 from './../images/f1.jpg';
import f2 from './../images/f2.jpg';
import quote from './../images/quote.png';

function page() {

  return (
    <Box sx={{minHeight:'60vh', color: 'white'}}>
    <Vertical/>
    <Box sx={{justifyContent:'center', display: 'flex'}}>
        <Typography color='#FFC700'>
        Feedbacks
        </Typography>
        </Box>
    <Grid sx={{mt:'3vh', mb:'4vh'}} container spacing={2}>
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
        <Box component="img" sx={{
                width:'5vh', position:'absolute', zIndex: '-1', opacity: '0.4'
              }} src={quote} />
        <Typography sx={{ mx:'2xh', mb:'3vh', fontWeight:'100'}} variant='h6'>
        “A participação do grupo Yuriki no Kizuna Eisá Daiko foi <b>extremamente profissional</b>. Nós, da Organização do Festival da Cultura Japonesa de Salvador, só temos a agradecer aos integrantes do grupo pela <b>postura exemplar</b> adotada em cada um dos momentos que envolveu a participação. Sua apresentação <b>abrilhantou o Festival</b>, agradando todo público presente."
        </Typography>
        <Typography sx={{ mx:'2xh', mb:'1vh'}} variant='h6'>
        Isa Toyota
        </Typography>
        <Typography sx={{ mx:'2xh', mb:'1vh'}} variant='h8'>
        Comissão Organizadora do Festival da Cultura Japonesa de Salvador
        </Typography>
        </Grid>
    </Grid>

    <Divider sx={{ mt:'3vh', bgcolor:'grey', display: {md: 'none'} }} />

    <Grid sx={{my:'4vh'}} container spacing={2}>
    <Grid sx={{textAlign:'right'}} item xs={12} md={6}>
        <Box sx={{textAlign:'left'}}>
        <Box component="img" sx={{
                width:'5vh', position:'absolute', zIndex: '-1', opacity: '0.4'
              }} src={quote} />
        </Box>
        <Typography sx={{ mx:'2xh', mb:'3vh', fontWeight:'100'}} variant='h6'>
        “A Mostra Japão <b>admira e parabeniza</b> o trabalho do Grupo Yuriki no Kizuna. Sempre fazemos questão de ter os espetáculos deles em nossos eventos realizados, pois eles trazem em suas apresentações de taiko e shishimai, toda a <b>emoção e carisma</b> que queremos passar para o publico que vem prestigiar. Temos orgulho das nossas raízes Okinawa e <b>ficamos muito felizes em ter encontrado um grupo tão dedicado e incrível.</b>"
        </Typography>
        <Typography sx={{ mx:'2xh', mb:'1vh'}} variant='h6'>
        Roseli Kanashiro
        </Typography>
        <Typography sx={{ mx:'2xh', mb:'1vh'}} variant='h8'>
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

    <Divider sx={{ mt:'3vh', bgcolor:'grey', display: {md: 'none'} }} />

    <Grid sx={{my:'4vh'}} container spacing={2}>
        <Grid item xs={12}>
        <Box component="img" sx={{
                width:'5vh', position:'absolute', zIndex: '-1', opacity: '0.4'
              }} src={quote} />
        <Typography sx={{ mx:'2xh', mb:'3vh', fontWeight:'100', textAlign:'center'}} variant='h6'>
        “Seja quando encontrei o grupo Yuriki em eventos, seja quando recebi o grupo no evento de Piracicaba, 3 palavras os caracterizam: <b>respeito, excelência e carisma</b>! Sempre em contato pra alinhar detalhes, todos os integrantes <b>extremamente educados e solicitos</b> com toda comissão organizadora antes, durante e após o evento! Fora que são um <b>espetáculo</b> a parte! <b>Sem dúvida uma atração que não pode faltar nos festivais</b>."
        </Typography>
        <Typography sx={{ mx:'2xh', mb:'1vh'}} variant='h6'>
        Paula Hirama
        </Typography>
        <Typography sx={{ mx:'2xh', mb:'1vh'}} variant='h8'>
        Organizadora do Evento Sakura Matsuri (Piracicaba)
        </Typography>
        </Grid>
    </Grid>

    </Box>
  );
}
export default page;
