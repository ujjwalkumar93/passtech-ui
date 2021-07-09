
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class GuttersGrid extends React.Component {
  state = {
    spacing: '16',
  };


  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
        <Grid container style={{backgroundColor: '#009688', color: 'white'}} >
        <Grid item xs={12} lg={4}  > 
            <Box borderBottom={1} ml={4} mr={4} width={250}>
            <Typography align={"left"} ><b>Services</b></Typography>
            </Box>
            <Box ml={4} align={"center"}>
              <Link href="#">
                <Typography align={"left"}>Sale Phone</Typography>
              </Link>
              <Link href="#">
                <Typography align={"left"}>Buy Phone</Typography>
              </Link>
              <Link href="#">
                <Typography align={"left"}>Become Partner</Typography>
              </Link>
            </Box>
        </Grid>
        <Grid item xs={12} lg={4} >
            <Box borderBottom={1} ml={4} width={250}>
              <Typography align={"left"}><b>Company</b></Typography>
            </Box>
            <Box ml={4} align={"center"}>
              <Link href="#">
                <Typography align={"left"}>About Us</Typography>
              </Link>
              <Link href="#">
                <Typography align={"left"}>Contact Us</Typography>
              </Link>
              <Link href="#">
                <Typography align={"left"}>Partner With Us</Typography>
              </Link>
            </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
            <Box borderBottom={1}  ml={4} width={250}>
              <Typography align={"left"}><b>More Info</b></Typography>
            </Box>
            <Box ml={4} align={"center"}>
              <Link href="#">
                <Typography align={"left"}>Term & Conditions</Typography>
              </Link>
              <Link href="#">
                <Typography align={"left"}>Privacy Policy</Typography>
              </Link>
              <Link href="#">
                <Typography align={"left"}>E-Waste Policy</Typography>
              </Link>
            </Box>
        </Grid>
    
    </Grid>
    
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);