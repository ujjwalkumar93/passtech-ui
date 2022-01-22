import React from 'react'
import SecurityIcon from '@material-ui/icons/Security';
import { Typography,Box,Grid,Checkbox,FormControlLabel,Button } from '@material-ui/core';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import PaymentIcon from '@material-ui/icons/Payment';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PriceTable from '../components/PriceTable/PriceTable.js';
import { useHistory } from "react-router-dom";

export default function Checkout(props){
  const [expanded, setExpanded] = React.useState(false);
  let history = useHistory()
  console.log("Props data is: ",props.location.state)

  const calculatePrice = () => {
      let totalDepritiation = 0
      props.location.state.primaryCondition.map(i=> {
          if(i.n){
            totalDepritiation+=parseFloat(i.valuation)
          }
      })
      let estimated_price = 0
      console.log("totalDepritiation: ",totalDepritiation)
      estimated_price = parseFloat(props.location.state.mobileInfo.maximum_price) - totalDepritiation/100*parseFloat(props.location.state.mobileInfo.maximum_price)
      return estimated_price
  }

  const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
  };
    return( 
        <Grid container>
            <Grid item lg={8} xs={12}>
                <Box flexGrow={3} mx={8} my={8} boxShadow={1} borderRadius={16} display="flex">
                    <Box my={4} flexWrap="wrap" flexDirection="row-reverse" display="flex" marginRight={5}>
                        <img src = {props.location.state.mobileInfo.img_src} style={{
                            maxWidth:"50%",
                            height:"auto",
                        }}/>
                </Box>
                        <Box mx={4} my={4}>
                            <Typography variant="h5"><b>{props.location.state.mobileInfo.model}</b></Typography>
                            <Typography variant="h6">Buying price</Typography>
                            <Typography variant="h4" style={{color:"#c7493a"}}>₹{calculatePrice()}</Typography>
                            <Box flexGrow={1} flexWrap="wrap" boxShadow={1} paddingX={4} paddingY={3} borderRadius={8}>
                                    <Typography variant="subtitle1">The value is based on the condition of the product mentioned by you.</Typography>
                                    <Typography variant="subtitle1"><span style={{color:"#c7493a"}}>Click Here</span> to See your Device report</Typography>
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
                <Box boxShadow={1} mx={8} borderRadius={20} display="flex" my={8} display="flex" justifyContent="center" flexDirection="column" padding={8}>
                    <Box mx={2} my={4} borderBottom={1} flexGrow={1} borderColor="secondary.main" >
                        <Typography variant="h6"><b>Price Summary</b></Typography>
                        <PriceTable data={calculatePrice()}/>
                    </Box>
                    <Button 
                        variant="contained" 
                        color="secondary"
                        onClick={() => {
                            let d = {
                                data: calculatePrice(),
                                mobileData:props.location.state
                            }
                            history.push("/appointment",d)
                        }}
                        >Enter Pickup Details</Button>
                </Box>
            </Grid>

            <Box mx={8} my={8}>
                    {/* start */}
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        >
                        <Typography>How it works</Typography>
                        <Typography>how it works</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            this is how it works................................................
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                        >
                        <Typography >Users</Typography>
                        <Typography >
                            You are currently not an owner
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                            diam eros in elit. Pellentesque convallis laoreet laoreet.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        >
                        <Typography >Advanced settings</Typography>
                        <Typography >
                            Filtering has been entirely disabled for whole web server
                        </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                            vitae egestas augue. Duis vel est augue.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                        >
                        <Typography>Personal data</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                            vitae egestas augue. Duis vel est augue.
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    {/* end */}
                </Box>
        </Grid>
    )
}