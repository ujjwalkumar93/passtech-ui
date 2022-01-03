import React from 'react';
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

  async function handleSubmit(e){
    console.log("handle submit called")



    //let responce = await fetch('http://18.117.91.127/api/method/pastech_app.api.test', {
   // let responce = await fetch('http://18.117.91.127/api/method/pastech_app.api.create_customer_enquiry?name=test&phone=123&email=test@gmail.com&data=ererere', {
    //let responce = await fetch('http://localhost:8001/api/method/uttamenergy.api.create_customer_enquiry?name=test&phone=123&email=test@gmail.com&data=ererere', {
//     method: 'GET',
//     mode: 'cors',
//     headers: {
//         'Authorization': 'token api_key:cbbfeb49897d3c5',
//         'Accept': 'application/json',
//         //'Content-Type' : 'application/x-www-form-urlencoded',
//         'Content-Type': 'application/json;charset=utf-8',
//         'Access-Control-Allow-Origin' : '*',
    
//     }
//     }
//    )

    // let data = await responce.json();
    // console.log("is date...")
    // console.log(data);



    fetch('http://139.59.89.95/api/method/pastech_app.api.create_customer_enquiry?name=ujjwal&phone=9511807518&email=ujjwal@gmail.com&data=please call me', {
        headers: {
            'Authorization': 'token 922bf15398fb62d:eed30f308e813e0'
        }
    })
    .then(r => r.json())
    .then(r => {
        console.log(r);
    })

    // let response = await fetch('http://18.117.91.127/api/method/pastech_app.api.get_all_branbds', {
    // method: 'GET',
    // headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    // },
    // body: JSON.stringify({
    //     name: 'ujjwal',
    //     email: 'yourOtherValue',
    // })
    //})
    // .then( resp => {
    //     console.log("resp Is: ",resp.json())
    // })
    //let response = await fetch('someurltoAJsonFile.json');
//   let data = await response.json();
//   console.log(data);
    
}
export default function ContactUs(){
    const classes = useStyles();
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
                                    <TextField id="name" label="Name" variant="outlined" fullWidth={true}/>
                                </Box>
                                <Box paddingTop={2} display="flex" justifyContent="center">
                                    <Box marginRight={1}>
                                        <TextField id="mob" label="Mobile" variant="outlined" fullWidth={true}/>
                                    </Box>
                                    <Box marginLeft={1}>
                                        <TextField id="email" label="Email" variant="outlined" fullWidth={true}/>
                                    </Box>
                                </Box>
                                <Box marginTop={2}>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Description..."
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                                </Box>
                                <Box marginTop={2}>
                                <Button variant="contained" 
                                    onClick={e => handleSubmit(e)}
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