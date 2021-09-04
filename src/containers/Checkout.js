import React from 'react'
import SecurityIcon from '@material-ui/icons/Security';
import { Typography,Box,Grid,Checkbox,FormControlLabel,Button } from '@material-ui/core';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import PaymentIcon from '@material-ui/icons/Payment';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function Checkout(props){
  const [expanded, setExpanded] = React.useState(false);

  function createData(name, price) {
    return { name, price};
  }

  const rows = [
    createData('Base Price', 3000),
    createData('Pickup charge', "Free"),
    createData('Total Price', 300),
  ];


  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
    return( 
        <Grid container>
            <Grid item lg={8} xs={12}>
                <Box flexGrow={3} ml={8} mr={1} my={8} boxShadow={1} borderRadius={16} display="flex">
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
                            <Box flexGrow={1} flexWrap="wrap" boxShadow={1} paddingX={4} paddingY={3} borderRadius={8}>
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
                <Box ml={8} mr={1} my={8}>
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
            <Grid item lg={4} xs={12}>
                <Box boxShadow={1} borderRadius={20} display="flex" my={8}>
                    <Box mx={4} my={4} borderBottom={1} flexGrow={1} borderColor="secondary.main"z>
                        <Typography variant="h5"><b>Price Summary</b></Typography>
                        <Box>
                        <TableContainer>
                            <Table  aria-label="simple table">
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow key="id">
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                {/* <TableCell align="right">44</TableCell>
                                <TableCell align="right">55</TableCell>
                                <TableCell align="right">65</TableCell> */}
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}