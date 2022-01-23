
import React, { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Signup from './Signup.js'
import Fetch from 'react-fetch'
import { BorderColor } from '@material-ui/icons';
import Password from 'antd/lib/input/Password';
import { useHistory } from "react-router-dom";
function Copyright() {
  let history = useHistory()
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://passtech.com/">
        Passtech
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight:500,
    paddingTop:"40%"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#389583",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignupSignin(props) {
  let history = useHistory()
  const classes = useStyles();
  const[googleData,setGoogleData]=useState({})
  const[email,setEmail]= useState(null)
  const auth_success = resp => {
    console.log("Success", resp)
    let obj = {
      googleId: resp.googleId,
      email: resp.profileObj.email,
      fullName: resp.profileObj.name
    }
    setEmail(resp.profileObj.email)
    setGoogleData(obj)
    console.log("document.referrer is: ",props)
    history.push(props.location.state.prev_url)
  }
  const auth_fail = resp => {
    console.log("faill", resp)
  }
  async function handle_auth(){
    if(googleData.email !=undefined){
      var url = `http://139.59.89.95/api/method/pastech_app.api.create_website_user?email=${googleData.email}&gmail_uid=${googleData.googleId}&full_name=${googleData.fullName}`
      fetch(url, {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          }
      })
      .then(r => r.json())
      .then(r => {
          console.log(r);
          if(r.message){
            console.log("resp is: ",r.message)
            if(r.message){
              console.log("setted...........")
            }
            //setAddressList(r.message)
          }
      })


    }
  }
  useEffect(() => {
    handle_auth()
    //console.log("document.referrer: ",)
  },[googleData])

  useEffect(() => {
    localStorage.setItem("email", email)
  },[email])
  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Wellcome To Passtech
      </Typography>
      <GoogleLogin
        clientId="498104296916-uvjfdfdfr01u554eu5jqc1ajad3jefqq.apps.googleusercontent.com"
        buttonText="Login With Your Gmail Account & verify instantly"
        onSuccess={auth_success}
        onFailure={auth_fail}
        cookiePolicy={'single_host_origin'}
    />
    </div>
    <Box mt={8}>
      <Copyright />
    </Box>
  </Container>
  );
}

