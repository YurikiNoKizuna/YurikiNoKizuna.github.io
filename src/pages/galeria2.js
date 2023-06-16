import { Grid, Box, Typography, IconButton } from '@mui/material';
import Vertical from './../vertical'
import * as React from 'react';
import { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './galeria2.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import $ from 'jquery';

function importAll(r) {
  return r.keys().map(r);
}
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function leftScroll() {
  const left = document.querySelector(".grid-gallery");
  const wsize = $("#galeria").width()
  left.scrollBy(0 - wsize, 0);
}
function rightScroll() {
  const right = document.querySelector(".grid-gallery");
  const wsize = $("#galeria").width()
  right.scrollBy(wsize, 0);
}
function restartScroll() {
  const right = document.querySelector(".grid-gallery");
  right.scrollTo(0,0)
}


const images = shuffle(importAll(require.context('./../images/galeria/', false, /\.(png|jpe?g|svg|JPG)$/)));

function Page() {
  useEffect(() => {
    const interval = setInterval(() => {
      const right = document.querySelector(".grid-gallery");
      if ( Math.abs(right.scrollLeft) === right.scrollWidth - right.clientWidth) {
        restartScroll();
      } else {
        rightScroll();
      }
    }, 5000);
    return () => clearInterval(interval);
});
  return (
    <Box sx={{padding:'50px 0px'}} id='galeria'>
    <Vertical/>
    <Box sx={{justifyContent:'center', display: 'flex'}}>
        <Typography color='#FFC700'>
        Galeria
        </Typography>
        </Box>
    <Grid sx={{my:'3vh'}} container spacing={2}>
        

    <div class ="grid-container">
      <div class="grid-gallery">
        {images.map((image) => (
                <div class="grid-item">
                <a href={image} data-lightbox="gridImage">
                  <img alt="" src={image} />
                </a>
              </div>
          ))}
      </div>
    </div>
    </Grid>
    <Box sx={{ alignContent:'center', textAlign:'center'}}>
    <IconButton onClick={leftScroll} sx = {{ overflow:'hidden', fontSize:'1.5em', color: 'white', zIndex:500}}>
      <ArrowBackIosNewIcon fontSize='inherit' />
    </IconButton>
    <IconButton onClick={rightScroll} sx = {{ fontSize:'1.5em', color: 'white', zIndex:500}}>
      <ArrowForwardIosIcon fontSize='inherit' />
    </IconButton>
    </Box>
    </Box>
  );
}
export default Page;
