import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function VerticalDividerText() {

  return (
    <Grid container>
      <Grid item xs>
         
      </Grid>
      <Divider sx={{ bgcolor: "#FFC700", height:'5vh' }} orientation="vertical" flexItem />
      <Grid item xs>
         
      </Grid>
    </Grid>
  );
}