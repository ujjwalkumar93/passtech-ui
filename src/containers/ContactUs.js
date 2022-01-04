import React, { useState } from 'react';
import { Typography,Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import $ from 'jquery';
const useStyles = makeStyles({
    root: {
      maxWidth: '100%',
      minWidth: '50%',
    },
    media: {
      height: 140,
    },
  });

  async function handleSubmit(customerName,mobile,email,msg){
    console.log("handle submit called")
    var url = `http://139.59.89.95/api/method/pastech_app.api.create_customer_enquiry?name=${customerName}&phone=${mobile}&email=${email}&data=${msg}`
    fetch(url, {
        headers: {
            'Authorization': 'token 1c8cb14f765a8d5:761130bd34e4504',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then(r => r.json())
    .then(r => {
        console.log(r);
        if(r.message){

        }
    })
    
}
export default function ContactUs(){
    const classes = useStyles();
    const [customerName,setCustomerName] = useState()
    const [email,setEmail] = useState()
    const [mobile,setMobile] = useState()
    const [msg,setMsg] = useState()
    return(
        
            <Box>
                <img src="https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-literary-romantic-online-store-banner-image_169704.jpg" 
                    style={{
                        height:"100%",
                        width:"100%",
                        objectFit:'contain'
                }}/>
                <Box display="flex" justifyContent="center"  flexWrap="wrap">
                    <Grid container>
                        <Grid item xs={12} lg={4}>
                            <Box p={5}>
                                <Typography variant="inherit" color="textSecondary">Please fill out the quick form and we will be in touch with lightening speed.</Typography>
                                <Box paddingTop={2} display="flex" justifyContent="center">
                                    <TextField id="name" label="Name" variant="outlined" fullWidth={true} onChange={e => {setCustomerName(e.target.value)}}/>
                                </Box>
                                <Box paddingTop={2} display="flex" justifyContent="center">
                                    <Box marginRight={1}>
                                        <TextField id="mob" label="Mobile" variant="outlined" fullWidth={true} onChange={e => {setMobile(e.target.value)}}/>
                                    </Box>
                                    <Box marginLeft={1}>
                                        <TextField id="email" label="Email" variant="outlined" fullWidth={true} onChange={e => {setEmail(e.target.value)}}/>
                                    </Box>
                                </Box>
                                <Box marginTop={2}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Description..."
                                        value = {msg}
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        fullWidth={true}
                                        onChange={e => {setMsg(e.target.value)}}
                                    />
                                </Box>
                                <Box marginTop={2}>
                                <Button variant="contained" 
                                    onClick={e => handleSubmit(customerName,mobile,email,msg)}
                                    style={{background:"#42c8b7", 
                                    color:"white",
                                    fullWidth:true,
                                    width:'100%'
                                    }}>Submit</Button>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={8}>
                            <Box paddingTop={7}>
                            <Typography variant="h4">Connect with us:</Typography>
                                <Grid container>
                                    <Grid item lg ={6} xs={12}>
                                        <Box paddingTop={2}>
                                        <Typography>
                                        For support or any questions: Call us at 8490066900 
                                        or Email us at support@passtech.in for Sell & Repair Queries
                                        </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box paddingTop={5}>
                            <Typography variant="h5">Registered Office:</Typography>
                            <Grid container>
                                    <Grid item lg ={6} xs={12}>
                                        <Box paddingTop={2}>
                                        <Typography>
                                        office: 2006 World Trade center wagholi Pune maharashtra 410001
                                        </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            
        
    )
}