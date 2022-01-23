import {React,useState} from "react";
// import { useState } from 'react';
import PriceTable from '../components/PriceTable/PriceTable.js';
import SetAddress from '../components/Address/SetAddress.js';
import BankDetails from '../components/BankDetails/BankDetails.js';
import GetAddress from '../components/Address/GetAddress.js';
import {CardContent,Card,Radio,Box,Typography,Button,Grid,TextField,Chip} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import Alert from '@mui/material/Alert';
import { useHistory } from "react-router-dom";
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
    let history = useHistory()
    const[showError,setShowError] = useState(false)
    const today = new Date().toISOString().split('T')[0];
    const[add, setAdd] = useState(false)
    const[appointmentDate,setAppointmentDate]= useState(null)
    //const[slot,setSlot] = useState(null)
    const[showSlot, setShowSlot] = useState(false)
    const[selectedSlot, setSelectedShowSlot] = useState(null)
    const[addressList,setAddressList] = useState([])
    const[addId,setAddId] = useState(null)
    //const[selectedAddress,setSelectedAddress] = useState([])
    const classes = useStyles();
    const[slotList,setSlotList] = useState([])

    function get_user_address(usr) {
        let user = localStorage.getItem("email")
        if(user === null){
            //return true
            history.push("/signin")
        }
        if(user !=null || user!=undefined){
            console.log(">>>>>>>>>>>: ",user)
            var url = `http://139.59.89.95/api/method/pastech_app.api.get_address?email=${user}`
            fetch(url, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then(r => r.json())
            .then(r => {
                if(r.message){
                setAddressList(r.message)
                }
            })
        }
      }
      function get_slot(){
        var url = `http://139.59.89.95/api/method/pastech_app.api.get_slot`
        fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(r => r.json())
        .then(r => {
            if(r.message){
                setSlotList(r.message)
            }
        })
      }
      useEffect(() => {
        get_slot()
        get_user_address("usr")
        console.log("props are: ",props)
      },[])
      function handleAddress(name){
          let data = []
        addressList.map(i => {
            let obj = i
            if(i.name === name){
                obj.enable = !obj.enable
            }
            if(i.name !== name){
                obj.enable = false
            }
            data.push(obj)
            setAddressList([...data])
        })

      }
      function handle_date(date){
        setShowSlot(true)
        setAppointmentDate(date)
      }
      function handleAppointment(){

        let user = localStorage.getItem("email")
        if(user === null){
            return true
        }
        console.log("data is: ",props.location.state.mobileData)
        //let user = user
        let mobile = encodeURIComponent(props.location.state.mobileData.mobileInfo.model)
        // let doa = appointmentDate
        // let slot = "10Am-12AM"
        // let address_id = "1674996bfb"
        let primary_condition = encodeURIComponent(JSON.stringify(props.location.state.mobileData.primaryCondition))
        let secondary_condition = encodeURIComponent(JSON.stringify(props.location.state.mobileData.secondryCondition))
        let estimated_price = props.location.state.data
        let ts = Date.now()

        if(selectedSlot===null || appointmentDate === null){
            setShowError(true)
            return true
        }
        else {
            console.log("appointmentDate is:",appointmentDate)
            var url = `http://139.59.89.95/api/method/pastech_app.api.create_appointment?user=${user}&mobile=${mobile}&doa=${appointmentDate}&slot=${selectedSlot}&primary_condition=${primary_condition}&secondary_condition=${secondary_condition}&address_id=${addId}&estimated_price=${estimated_price}&time_stamp=${ts}`
        //var url = `http://139.59.89.95/api/method/pastech_app.api.create_appointment`
        //var url = `localhost:8001/api/method/pastech_app.api.create_appointment?user=${user}&mobile=${mobile}&doa=${doa}&slot=${slot}&primary_condition=${primary_condition}&secondary_condition=${secondary_condition}&address_id=${address_id}&estimated_price=${estimated_price}`
            // let payload = {
            //     user:user,
            //     mobile:mobile,
            //     doa:doa,
            //     slot:slot,
            //     primary_condition:primary_condition,
            //     secondary_condition:secondary_condition,
            //     address_id:address_id,
            //     estimated_price:estimated_price
            //   }
              console.log(url)
              fetch(url, {
                method: 'POST',
                  headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                  },
                  //body: JSON.stringify(payload)
              })
              .then(r => r.json())
              .then(r => {
                  if(r.message){
                    console.log("resp is: ",r.message)
                    //setAddressList(r.message)
                    history.push(
                        "/confirmation",
                        {booking:r.message}
                    )
                  } else {
                      setShowError(true)
                  }
              })
        }
          
      }
      useEffect(() => {
        addressList.map(i => {
            if(i.enable === true){
                setAddId(i.name)
            }
        })
      },[addressList])
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
                                // ref="app"
                                label="Choose Appointment Date"
                                type="date"
                                onChange={e => handle_date(e.target.value)}
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
                                {/* <GetAddress/> */}

                                {
                                    addressList.map(i => {
                                        return (
                                          <Card style={{maxWidth:300 ,marginTop:8}}
                                            onClick={() => {handleAddress(i.name)}}
                                          >
                                          <CardContent>
                                          <Box display="flex">
                                            <Box>
                                            <Radio
                                              onChange = {e => console.log(">>>>>>>>>>>>>>")}
                                              checked = {i.enable}
                                            />
                                            </Box>
                                            <Box>
                                            <Typography>{i.full_name}</Typography>
                                            <Typography variant="subtitle2">{i.mobile}</Typography>
                                            <Typography variant="subtitle2">{i.city}</Typography>
                                            <Typography variant="subtitle2">{i.postal_code}</Typography>
                                            </Box>
                                    
                                          </Box>
                                          </CardContent>
                                        </Card>
                                        )
                                    })
                                }


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
                        <PriceTable data={props.location.state.data}/>
                    </Box>
                    <Box mx={8} my={4}>
                       <BankDetails/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        {
            showError === true ? (<Alert severity="error">Please fill all the value...</Alert>) : null
        }
        <Grid container justify = "center">
                <Button 
                    variant="contained" 
                    color="green"
                    onClick={() => {handleAppointment()}}
                    style={{margin:"24px", float:"center"}}
                    >Book Appointment
                </Button>
                </Grid>
       </Box>
    )
}