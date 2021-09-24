import {Box,Card,CardActions,CardContent,Button,Typography,Radio, Grid} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

function Greeting(){
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
                <Typography>Hello Ujjwal</Typography>
            </Box>
        </Box>
    )
}

function ViewAndEditProfile(){
    return(
        <Grid container>
            <Box display="flex" flexDirection="column" boxShadow={1} pt={6} pb={6}>
                <Grid item xs={8} lg={8}>
                    <TextField 
                        id="standard-name" 
                        label="Full Name" 
                        defaultValue="Ujjwal"
                        required = {true}
                        variant = "filled"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            readOnly: true,
                        }} 
                        style={{
                            marginBottom:8,
                            width:300
                        }}
                    />
                    <TextField 
                        id="standard-name" 
                        label="Email" 
                        defaultValue="ukumar@dexciss.com"
                        required = {true}
                        variant = "filled"
                        style={{
                            width:300,
                            marginBottom:8,
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            readOnly: true,
                        }} 
                    />
                </Grid>
            </Box>
        </Grid>
    )
}
export default function Profile() {
    return(
        <Box display="flex" flexDirection="row" flexGrow={5} mt={16} mb={19} ml={8} mr={8}>
            <Box flex={1}  padding={1} display="flex" flexDirection="column">
                <Greeting/>
                <Box marginTop={2} boxShadow={1}>
                    <List sx={style} component="nav" aria-label="mailbox folders">
                        <ListItem button>
                            <ListItemText primary="Profile Information" />
                        </ListItem>
                        <Divider />
                        <ListItem button divider>
                            <ListItemText primary="Manage Address" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Sales/Purchase History" />
                        </ListItem>
                        <Divider light />
                        <ListItem button>
                            <ListItemText primary="Logout" style={{color:"red"}}/>
                        </ListItem>
                    </List>
                </Box>
            </Box>
             {/* second column  code starts from here*/}
            <Box flex={4} padding={1}>
                <ViewAndEditProfile/>
            </Box>

        </Box>
    )
}