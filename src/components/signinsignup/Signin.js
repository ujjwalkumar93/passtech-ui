
import React, { useState } from 'react';
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
function Copyright() {
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

export default function SignupSignin() {
  const classes = useStyles();
  const [showSignin, setshowSignin] = useState(true)
  const auth_success = resp => {
    console.log("Success", resp)
  }
  const auth_fail = resp => {
    console.log("faill", resp)
  }
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
        buttonText="Login With Your Gmail Account"
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

