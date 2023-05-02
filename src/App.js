import './App.css';
import background from './images/background.jpg';
import * as React from 'react';
import { Box, Container, ThemeProvider } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = {}

function App() {
  return (
    <ThemeProvider sx={{position: "relative"}} theme={theme}>
      <Box component="img" sx={{ width: "1", maxHeight: "100vh", objectFit: "cover" }} src={background}/>
      <Container sx={{ bgcolor:"tomato", height: "100vh" }}>
        YURIKI
      </Container>
    </ThemeProvider>
  );
}

export default App;
