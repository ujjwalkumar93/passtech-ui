import {React,useState} from "react";
// import { useState } from 'react';
import PriceTable from '../components/PriceTable/PriceTable.js';
import { Box, Typography,Button,Grid,TextField,Chip,Divider} from '@material-ui/core';
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
    console.log(">>>>>>>>>>???",today)
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
    console.log(">>>>>>>>>>>>>>>>>>",selectedSlot)
    return(
        <Box>
            <Grid container>
                <Grid item lg={9} xs={12}>
                    <Box display="flex" flexDirection="column" alignContent="center" mx={8} my={4}>
                        <Typography variant="h5">Address</Typography>
                        <Typography variant="subtitle2">Please Add/Select Address</Typography>
                        <Box display="flex" alignSelf="flex-end" mx={8} my={4}>
                            <Button 
                            variant="contained" 
                            color="secondary"
                            onClick={() => {setAdd(true)}}
                            >Add Address</Button>
                        </Box>

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
                        </form>
                    </Box>

                </Grid>
                <Grid item lg={3} xs={12}>
                    <Box mx={8} my={4}>
                        <Typography variant="h6"><b>Price Summary</b></Typography>
                        <PriceTable/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}