
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import FacebookIcon from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';

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

const link_style = {
  textDecoration: 'none',
  '&:hover': {
    color: 'white'
  },
};


class GuttersGrid extends React.Component {
  state = {
    spacing: '16',
  };


  render() {
    // const { classes } = this.props;
    // const { spacing } = this.state;

    return (
        <Grid container style={{backgroundColor: '#389583', color: 'white', paddingTop:"16px", paddingBottom:"50px"}}>
        <Grid item xs={12} lg={3}> 
            <Box borderBottom={1} ml={4} mr={4} mt={4} width={"auto"} >
            <Typography align={"left"} variant="h5"><b>Services</b></Typography>
            </Box>
            <Box ml={4} align={"center"} mb={4} >
              <Link href="#" color="inherit" underline={'none'} style={{backgroundColor:"red"}}>
                <Typography style={{ fontSize: '22px',color:'white' }}  align={"left"} fontSize={"4px"}>Sale Phone</Typography>
              </Link>
              <Link href="#" color="inherit" underline={'none'}>
                <Typography style={{ fontSize: '22px',color:'white' }} align={"left"}>Buy Phone</Typography>
              </Link>
              <Link href="#" color="inherit" underline={'none'}>
                <Typography style={{ fontSize: '22px',color:'white' }} align={"left"}>Become Partner</Typography>
              </Link>
            </Box>
        </Grid>
        <Grid item xs={12} lg={3}>
            <Box borderBottom={1} ml={4} mt={4} width={"auto"} mr={4}>
              <Typography align={"left"} variant="h5"><b>Company</b></Typography>
            </Box>
            <Box ml={4} style={{ fontSize: '22px',color:'white' }} align={"center"} mb={4}>
              <Link href="/about_us" color="inherit" underline={'none'}>
                <Typography style={{ fontSize: '22px',color:'white' }} align={"left"}>About Us</Typography>
              </Link>
              <Link href="/contact_us" color="inherit" underline={'none'}>
                <Typography style={{ fontSize: '22px',color:'white' }} align={"left"}>Contact Us</Typography>
              </Link>
              <Link href="#" color="inherit" underline={'none'}>
                <Typography style={{ fontSize: '22px',color:'white' }} align={"left"}>Partner With Us</Typography>
              </Link>
            </Box>
        </Grid>
        <Grid item xs={12} lg={3}>
            <Box borderBottom={1}  ml={4} mt={4} width={"auto"} mr={4}>
              <Typography align={"left"} variant="h5" width="auto" ><b>More Info</b></Typography>
            </Box>
            <Box ml={4} align={"center"} mb={4}>
              <Link href="term_and_condition" color="inherit" underline={'none'}>
                <Typography style={{ fontSize: '22px',color:'white' }} align={"left"}>Term & Conditions</Typography>
              </Link>
              <Link href="/privacy_policy" color="inherit" underline={'none'}>
                <Typography style={{ fontSize: '22px',color:'white' }} align={"left"}>Privacy Policy</Typography>
              </Link>
              <Link href="#" color="inherit" underline={'none'}>
                <Typography style={link_style} align={"left"} variant="h6">E-Waste Policy</Typography>
              </Link>
            </Box>
        </Grid>
        <Grid item xs={12} lg={3}>
            <Box borderBottom={1}  ml={4} mt={4} width={"auto"} mr={4}>
              <Typography align={"left"} variant="h5"><b>Follow Us</b></Typography>
            </Box>
            <Box ml={4} display="flex">
              <Box>
              <FacebookIcon/>
              </Box>
              <Link href="https://www.facebook.com/passtech.industrial.1" color="inherit" underline={'none'}>
                <Typography style={link_style} align={"left"} variant="h6">facebook/passtech</Typography>
              </Link>
            </Box>
            <Box ml={4} display="flex">
              <Box>
              <Instagram/>
              </Box>
              <Link href="#" color="inherit" underline={'none'}>
                <Typography style={link_style} align={"left"} variant="h6">instagram/passtech</Typography>
              </Link>
            </Box>
            <Box ml={4} display="flex">
              <Box>
              <Twitter/>
              </Box>
              <Link href="#" color="inherit" underline={'none'}>
                <Typography style={link_style} align={"left"} variant="h6">twitter/passtech</Typography>
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
