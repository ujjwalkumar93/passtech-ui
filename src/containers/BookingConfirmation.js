import React, { useEffect, useState } from 'react';
import { Typography,Box, Grid } from '@material-ui/core';
//import Searchbox from '../components/header/Searchbox.js';
import Card from '@material-ui/core/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { alpha, makeStyles } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';
import { width } from '@mui/system';
export default function BookingConfirmation(props){
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
    return(
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
        >
        <Grid item>
            <Typography sx={{ fontSize: 24 }} variant='h3' gutterBottom>
                    Booking confirmation
            </Typography>
            <Typography>
                Your booking id is: <b>{props.location.state.booking}</b>
            </Typography>
        </Grid>      
        </Grid>
    )
}