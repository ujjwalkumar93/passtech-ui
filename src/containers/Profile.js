import {Box,Card,CardActions,CardContent,Button,Typography,Radio, Grid} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import GetAddress from '../components/Address/GetAddress.js';
import SetAddress from '../components/Address/SetAddress.js';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Grid from '@mui/material/Grid';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

function Greeting(props){
    return(
        <Box display="flex" boxShadow={1}>
            <Box>
                <PersonIcon style={{
                        color:"red",
                        fontSize:"32px"
                    }}
                    />
            </Box>
            <Box margin={1}>
                <Typography>Hello {props.fullName}</Typography>
            </Box>
        </Box>
    )
}

function ViewAndEditProfile(){
    const[allowModify,setAllowModify] = useState(false)
    return(
        <Grid container>
            <Box display="flex" flexDirection="column">
                <Grid item xs={8} lg={8}>
                    <TextField 
                        id="standard-name" 
                        disabled={!allowModify}
                        label="Full Name" 
                        defaultValue={localStorage.getItem("email")}
                        required = {true}
                        variant = "filled"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        style={{
                            marginBottom:8,
                            width:300,
                            marginLeft:16
                        }}
                    />
                    <TextField
                        disabled={!allowModify}
                        id="standard-name" 
                        label="Email" 
                        defaultValue={localStorage.getItem("email")}
                        required = {true}
                        variant = "filled"
                        style={{
                            width:300,
                            marginBottom:8,
                            marginLeft:16
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                    {!allowModify ? (<Button 
                        variant="outlined"
                        onClick={e => {setAllowModify(true)}}
                        style={{
                            maxWidth:300,
                            marginLeft:16,
                            color:"red"
                        }}
                    >Modify</Button>): null}
                    {
                        allowModify ? (
                            <Box mt={1}>
                        <Button 
                            variant="outlined"
                            onClick={e => {setAllowModify(false)}}
                            style={{
                                maxWidth:300,
                                marginLeft:16,
                                color:"red"
                            }}
                        >Cancel</Button>
                        <Button 
                            variant="outlined"
                            onClick={e => {setAllowModify(false)}}
                            startIcon={<SaveIcon/>}
                            style={{
                                maxWidth:300,
                                marginLeft:16,
                                color:"red"
                            }}
                        >Save</Button>
                    </Box>
                        ) : null
                    }
            </Box>
        </Grid>
    )
}
function ManagePassword(){
    const[dissableBtn, setDissableBtn] = useState(false)
    // cons[hideSaveBtn,setHideSaveBtn] = useState(false)
    return(
        <Grid container>
        <Box display="flex" flexDirection="column">
            <Grid item xs={8} lg={8}>
                <TextField 
                    id="current-password" 
                    type="password"
                    disabled={dissableBtn}
                    label="Current Password" 
                    required = {true}
                    variant = "filled"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    style={{
                        marginBottom:8,
                        width:300,
                        marginLeft:16
                    }}
                />
                <TextField
                    id="new-password" 
                    type="password"
                    disabled={dissableBtn}
                    label="New Password" 
                    required = {true}
                    variant = "filled"
                    style={{
                        width:300,
                        marginBottom:8,
                        marginLeft:16
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
            <Grid item>
                <TextField
                        id="confirm-password" 
                        type="password"
                        disabled={dissableBtn}
                        label="Confirm Password" 
                        required = {true}
                        variant = "filled"
                        style={{
                            width:300,
                            marginBottom:8,
                            marginLeft:16
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
            </Grid>
            <Button 
                variant="outlined"
                onClick={e => {setDissableBtn(true)}}
                startIcon={<SaveIcon/>}
                style={{
                    maxWidth:300,
                    marginLeft:16,
                    color:"red"
                }}
            >Save</Button>
        </Box>
    </Grid>
    )
}

function ManageAddress(){
    return(
        <Box>
            <GetAddress/>
            <SetAddress/>
        </Box>
    )
}
function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs};
  }
  
function SalesHistory(){
    const[data,setData] = useState([])
    const rows = [
        createData('01-03-2021', "Oppo-01", 1000,"COD"),
        createData('01-03-2021', "Oppo-01", 1000,"Bank"),
        
      ];
    let totalOrder = data.length 
    
    useEffect(()=> {
        //get_full_name()
        let user = localStorage.getItem("email")
        if(user === null){
            return true
        }
        var url = `http://139.59.89.95/api/method/pastech_app.api.get_order_history?user=${user}`
        fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(r => r.json())
        .then(r => {
            if(r.message){
                setData(r.message)
            }
        })
    },[])
    return(
        <Box mr={4}>
            {
                totalOrder == 0 ? (
                    <Typography>No History Found</Typography>
                ): (
                    <Box>
                        <Table sx={{ maxWidth: 800 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell align="right">Date</TableCell>
                                <TableCell align="right">Mobile</TableCell>
                                <TableCell align="right">Amount</TableCell>
                                {/* <TableCell align="right">Payment Type</TableCell> */}
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {data.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                {/* <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell> */}
                                <TableCell align="right">{row.doa}</TableCell>
                                <TableCell align="right">{row.mobile}</TableCell>
                                <TableCell align="right">{row.estimated_price}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </Box>
                )
            }
        </Box>
    )
}
export default function Profile() {
    const[fullName,setName] = useState("Guest")
    const[component, setComponent] = useState("Profile Information")

    function get_full_name(){
        let user = localStorage.getItem("email")
        if(user === null){
            return true
        }
        console.log(">>>>>>>>>>>>>>>>>: ",localStorage.getItem("email"))
        var url = `http://139.59.89.95/api/method/pastech_app.api.get_use_info?user=${user}`
        fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(r => r.json())
        .then(r => {
        console.log("trying...............")
            if(r.message){
                setName(r.message)
            }
        })
    }
    useEffect(()=> {
        get_full_name()
    },[])
function handleLogout(){
    localStorage.removeItem("email");
    window.location.reload();
}

    return(
        <Box display="flex" flexDirection="row" flexGrow={5} mt={16} mb={19} ml={8} mr={8}>
            <Box flex={1}  padding={1} display="flex" flexDirection="column">
                <Greeting fullName={fullName}/>
                <Box marginTop={2} boxShadow={1}>
                    <List sx={style} component="nav" aria-label="mailbox folders">
                        <ListItem button onClick={e => setComponent("Profile Information")}>
                            <ListItemText primary="Profile Information" />
                        </ListItem>
                        <ListItem button onClick={e => setComponent("Change Password")}>
                            <ListItemText primary="Change Password" />
                        </ListItem>
                        <Divider />
                        <ListItem button divider onClick={e => setComponent("Manage Address")}>
                            <ListItemText primary="Manage Address" />
                        </ListItem>
                        <ListItem button onClick={e => setComponent("history")}>
                            <ListItemText primary="Sales/Purchase History" />
                        </ListItem>
                        <Divider light />
                        <ListItem button>
                            <ListItemText 
                            primary="Logout" 
                            style={{color:"red"}}
                            onClick={()=>{
                                handleLogout()
                            }}
                            />
                        </ListItem>
                    </List>
                </Box>
            </Box>
             {/* second column  code starts from here*/}
            <Box flex={4} boxShadow={1} pt={7} pb={6} pl={4}>
                {
                    component === "Profile Information" ? (<ViewAndEditProfile/>) : null
                }
                {
                    component === "Change Password" ? (<ManagePassword/>) : null
                }
                {
                    component === "Manage Address" ? (<ManageAddress/>) : null
                }
                {
                    component === "history" ? (<SalesHistory/>) : null
                }
                
            </Box>

        </Box>
    )
}