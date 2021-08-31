import React from 'react'
import SecurityIcon from '@material-ui/icons/Security';
import { Typography,Box,Grid,Checkbox,FormControlLabel,Button } from '@material-ui/core';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import PaymentIcon from '@material-ui/icons/Payment';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
export default function Checkout(props){
    return( 
        <Grid container>
            <Grid item lg={8} xs={12}>
            <Box flexGrow={3} ml={8} mr={1} my={8} boxShadow={6} borderRadius={16} display="flex">
                <Box my={4} flexWrap="wrap" flexDirection="row-reverse" display="flex" marginRight={5}>
                    <img src = "https://images-na.ssl-images-amazon.com/images/I/71-Su4Wr0HL._SY741_.jpg" style={{
                        maxWidth:"50%",
                        height:"auto",
                    }}/>
              </Box>
              <Box mx={4} my={4}>
                  <Typography variant="h5"><b>Apple iPhone 11 Pro Max (4 GB/64 GB)</b></Typography>
                  <Typography variant="h6">Selling price</Typography>
                  <Typography variant="h4" style={{color:"red"}}>₹800</Typography>
                  <Box flexGrow={1} flexWrap="wrap" boxShadow={6} paddingX={4} paddingY={3} borderRadius={8}>
                        <Typography variant="h5">The value is based on the condition of the product mentioned by you.</Typography>
                        <Typography variant="h6"><span style={{color:"red"}}>Click Here</span> to See your Device report</Typography>
                  </Box>
                  <Box display="flex" flexGrow={3} my={4}>
                        <Box flexGrow={1} flexWrap="wrap">
                            <Box><SecurityIcon color="secondary"/></Box>
                            <Typography variant="subtitle1" style={{color:"green"}}>Safe & Secure</Typography>
                        </Box>
                        <Box flexGrow={1}>
                            <MeetingRoomIcon color="secondary"/>
                            <Typography variant="subtitle1" style={{color:"green"}}>Free Doorstep</Typography></Box>
                        <Box flexGrow={1}>
                            <PaymentIcon color="secondary"/>
                            <Typography variant="subtitle1" style={{color:"green"}}>No Haggling</Typography>
                        </Box>
                  </Box>
              </Box>
            </Box>
            </Grid>

            <Grid item lg={4} xs={12}>
                <Box boxShadow={6} borderRadius={20} display="flex" my={8}>
                    <p>Test</p>
                </Box>
            </Grid>

        </Grid>
    )
}