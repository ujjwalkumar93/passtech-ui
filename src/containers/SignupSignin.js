import {React,useState} from "react";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { TextField,Button } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
export default function SignupSignin(){
    const [showPassword,setShow] = useState(false)
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      const h = window.screen.height
      const w = window.screen.width
    return(
        <Box display="flex" justifyContent="center" bgcolor="#009688" height={"100vh"} width={"100%"}>
            <Box bgcolor="lightgrey" paddingX={8} paddingTop={8} height={"80vh"} marginTop={'10vh'} borderRadius={20}>
                <Box justifyContent="center" display="flex" >
                    <Typography variant="h3" style={{color:"grey"}}>
                        Login
                    </Typography>
                </Box>
                <Box margin={5} boxShadow={2} flex={1} flexDirection="row" paddingX={10} paddingY={10}>
                    <Box>
                        <TextField id="filled-basic" label="Mobile Number" variant="filled" style={{width:"300px"}}/>
                    </Box>
                   <Box marginTop={2}>
                        <TextField id="filled-basic"  
                            label="Password" 
                            variant="filled" 
                            type={showPassword?"text":"password"}
                            endAdornment={
                                <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                        </InputAdornment>}
                        style={{width:"300px"}}
                        />
                   </Box>
                   <Box marginTop={4}>
                   <Button variant="contained" color="secondary" style={{width:"300px"}}> Login</Button>
                   </Box>
                </Box>
                <Box marginX={5}>
                    <div style={{float:"left"}}>
                        <Typography style={{color:"red"}}>Forget Password</Typography>
                    </div>
                    <div style={{float:"right"}}>
                        <Typography>Dont have account? <span style={{color:"green", fontSize:20}}>Sign Up</span></Typography>
                    </div>
                </Box>
            </Box>
        </Box>
    )
}