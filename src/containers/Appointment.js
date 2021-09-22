import {React,useState} from "react";
// import { useState } from 'react';
import PriceTable from '../components/PriceTable/PriceTable.js';
import SetAddress from '../components/Address/SetAddress.js';
import BankDetails from '../components/BankDetails/BankDetails.js';
import GetAddress from '../components/Address/GetAddress.js';
import { Box,Typography,Button,Grid,TextField,Chip} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
export default function Appointment(props){
    const today = new Date().toISOString().split('T')[0];
    const[add, setAdd] = useState(false)
    const[showSlot, setShowSlot] = useState(false)
    const[selectedSlot, setSelectedShowSlot] = useState(null)
    const classes = useStyles();
    var slotList = [
        {color:"#ffffff", time:"10Am-12AM"},
        {color:"#ffffff", time:"12Am-02AM"},
        {color:"#ffffff", time:"02Am-04AM"},
        {color:"#ffffff", time:"04Am-06AM"}
    ]
    return(
       <Box>
            <Box>
            <Grid container>
                <Grid item lg={9} xs={12}>
                    <Box display="flex" flexDirection="column" alignContent="center" mx={8} my={4}>
                        <Typography variant="h5">Address & Slot Detail</Typography>
                        <Typography variant="subtitle2">Address and Slot are mandatry</Typography>
                        <Box boxShadow={1} padding={8}>
                        <form className={classes.container} noValidate>
                            <TextField
                                id="date"
                                label="Choose Appointment Date"
                                type="date"
                                onChange={e => {setShowSlot(true)}}
                                className={classes.textField}
                                inputProps={{
                                    min: today
                                  }}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                            <Box my={2}>
                            {
                                showSlot ? (
                                    slotList.map(slot => {
                                        return(
                                            <Chip
                                                key={slot.time}
                                                label={slot.time}
                                                onClick={e => {setSelectedShowSlot(slot.time)}}
                                                variant="outlined"
                                                style={{marginLeft:4,
                                                    backgroundColor:selectedSlot === slot.time?"#13a76b":null,
                                                    color:selectedSlot === slot.time?"#ffffff":null
                                                }}
                                            />
                                        )
                                    })
                                ) : null
                            }
                            </Box>
                        </form>
                        </Box>
                    </Box>

                    <Box display="flex" flexDirection="column" alignContent="center" boxShadow={1} padding={8} paddingTop={4} my={4} mx={8}>
                            <Box flexGrow={2} display="flex">
                                <Box flexGrow={1}>
                                    <Typography variant="h6">Address</Typography>
                                </Box>
                                <Box flexGrow={1}>
                                    <Button 
                                        variant="contained" 
                                        color="secondary"
                                        onClick={() => {setAdd(true)}}
                                        style={{float:"right"}}
                                        >+Add New
                                    </Button>
                                </Box>
                            </Box>
                            <Box>
                                <GetAddress/>
                            </Box>
                            <Box>
                                {
                                    add ? (<SetAddress/>) : null
                                }
                            </Box>
                        </Box>
                </Grid>
                <Grid item lg={3} xs={12}>
                    <Box mx={8} my={4}>
                        <Typography variant="h6"><b>Price Summary</b></Typography>
                        <PriceTable/>
                    </Box>
                    <Box mx={8} my={4}>
                       <BankDetails/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        <Grid container justify = "center">
                <Button 
                    variant="contained" 
                    color="green"
                    onClick={console.log("HH")}
                    style={{margin:"24  px", float:"center"}}
                    >Book Appointment
                </Button>
                </Grid>
       </Box>
    )
}