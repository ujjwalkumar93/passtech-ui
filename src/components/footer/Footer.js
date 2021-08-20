// import React from 'react';

// import Box from '@material-ui/core/Box';

// import { makeStyles } from '@material-ui/core/styles';

// import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import Twitter from '@material-ui/icons/Twitter';
// import Instagram from '@material-ui/icons/Instagram';

// const useStyles = makeStyles({
//     root: {
//       maxWidth: 345,
//       minWidth: 150,
//     },
//     media: {
//       height: 140,
//     },
//   });
  
// export default function Footer(){
//   //const footer_item = [{name:"test"}]
//   const footer_item = [
//     {title:"Services",items:[{name:"Sale Phone",url:"#"},{name:"Buy Phone",url:"#"},{name:"Become Partner",url:"#"}]},
//     {title:"Company",items:[{name:"About Us",url:"/about_us"},{name:"Contact Us",url:"/contact_us"},{name:"Partner With Us",url:"#"}]},
//     {title:"More Info",items:[{name:"Term & Conditions",url:"term_and_condition"},{name:"Privacy Policy",url:"/privacy_policy"},{name:"E-Waste Policy",url:"#"}]},
    
//   ]
//     return(
//         <Box display="flex" flexWrap="wrap" justifyContent="center" marginLeft={8}>
//             {
//               footer_item.map(i => {
//                 return(
//                   <Box flex={1} justifyContent="center">
//                     <Typography>{i.title}</Typography>
//                     {i.items.map(itm=> {
//                       return(
//                         <Box>
//                             {/* <Typography variant="h6">{itm.name}</Typography> */}
//                             <Link href={itm.url} color="inherit">
//                               <Typography style={{ fontSize: '14px',color:'grey' }} align={"left"}>{itm.name}</Typography>
//                             </Link>
//                         </Box>
//                       )
//                     })}
//                   </Box>
                  
//                 )
//               })
//             }
//             <Box flex={1} justifyContent="center">
//               <Box>
//                 <Link href='#' color="inherit">
//                   <Typography style={{ fontSize: '14px',color:'grey' }} align={"left"}>Test</Typography>
//                 </Link>
//               </Box>
//             </Box>
//         </Box>
        
//     )
// }



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

class GuttersGrid extends React.Component {
  state = {
    spacing: '16',
  };


  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
        <Grid container style={{backgroundColor: '#009688', color: 'white'}} >
        <Grid item xs={12} lg={3}> 
            <Box borderBottom={1} ml={4} mr={4} mt={4} width={250} >
            <Typography align={"left"} ><b>Services</b></Typography>
            </Box>
            <Box ml={4} align={"center"} mb={4} >
              <Link href="#" color="inherit">
                <Typography style={{ fontSize: '14px',color:'white' }}  align={"left"} fontSize={"4px"}>Sale Phone</Typography>
              </Link>
              <Link href="#" color="inherit">
                <Typography style={{ fontSize: '14px',color:'white' }} align={"left"}>Buy Phone</Typography>
              </Link>
              <Link href="#" color="inherit">
                <Typography style={{ fontSize: '14px',color:'white' }} align={"left"}>Become Partner</Typography>
              </Link>
            </Box>
        </Grid>
        <Grid item xs={12} lg={3}>
            <Box borderBottom={1} ml={4} mt={4} width={250}>
              <Typography align={"left"}><b>Company</b></Typography>
            </Box>
            <Box ml={4} style={{ fontSize: '14px',color:'white' }} align={"center"} mb={4}>
              <Link href="/about_us" color="inherit">
                <Typography style={{ fontSize: '14px',color:'white' }} align={"left"}>About Us</Typography>
              </Link>
              <Link href="/contact_us" color="inherit">
                <Typography style={{ fontSize: '14px',color:'white' }} align={"left"}>Contact Us</Typography>
              </Link>
              <Link href="#" color="inherit">
                <Typography style={{ fontSize: '14px',color:'white' }} align={"left"}>Partner With Us</Typography>
              </Link>
            </Box>
        </Grid>
        <Grid item xs={12} lg={3}>
            <Box borderBottom={1}  ml={4} mt={4} width={250}>
              <Typography align={"left"}><b>More Info</b></Typography>
            </Box>
            <Box ml={4} align={"center"} mb={4}>
              <Link href="term_and_condition" color="inherit">
                <Typography style={{ fontSize: '14px',color:'white' }} align={"left"}>Term & Conditions</Typography>
              </Link>
              <Link href="/privacy_policy" color="inherit">
                <Typography style={{ fontSize: '14px',color:'white' }} align={"left"}>Privacy Policy</Typography>
              </Link>
              <Link href="#" color="inherit">
                <Typography style={{ fontSize: '14px',color:'white' }} align={"left"}>E-Waste Policy</Typography>
              </Link>
            </Box>
        </Grid>
        <Grid item xs={12} lg={3}>
            <Box borderBottom={1}  ml={4} mt={4} width={250}>
              <Typography align={"left"}><b>Follow Us</b></Typography>
            </Box>
            <Box ml={4} display="flex">
              <FacebookIcon/>
              <Link href="https://www.facebook.com/passtech.industrial.1" color="inherit">
                <Typography style={{ fontSize: '14px',color:'white' }} align={"left"}>facebook/passtech</Typography>
              </Link>
            </Box>
            <Box ml={4} display="flex">
              <Instagram/>
              <Link href="#" color="inherit">
                <Typography style={{ fontSize: '14px',color:'white' }} align={"left"}>instagram/passtech</Typography>
              </Link>
            </Box>
            <Box ml={4} display="flex">
              <Twitter/>
              <Link href="#" color="inherit">
                <Typography style={{ fontSize: '14px',color:'white' }} align={"left"}>twitter/passtech</Typography>
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
