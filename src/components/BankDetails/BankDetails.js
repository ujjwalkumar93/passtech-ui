import {Box,Card,CardActions,CardContent,Button,Typography,TextField,Radio, Select,InputLabel,MenuItem} from '@material-ui/core';
import { useState } from 'react';

function Upi(){
    const[newUpi, setUpi] = useState(false)
    return(
        <Box>
            <Card style={{maxWidth:300}}>
                <CardActions>
                </CardActions>
                <CardContent>
                    <Box display="flex">
                        <Radio
                            onChange = {e => console.log(">>>>>>>>>>>>>>")}
                            checked = {false}
                        />
                        <Typography style={{marginTop:"8px"}}>67667gg@sbin.com</Typography>
                    </Box>
                </CardContent>
            </Card>
            <Box>
                {newUpi ? (<TextField 
                  id="standard-name" 
                  label="Add UPI" 
                  // value={"test"} 
                  required = {true}
                  variant = "filled"
                  style={{maxWidth:300, marginTop:"8px"}}
                  InputLabelProps={{
                      shrink: true,
                    }}
                  />): null}
                {
                    !newUpi ? (<Button 
                        variant="contained" 
                        color="secondary"
                        onClick={() => {setUpi(true)}}
                        style={{marginTop:"8px"}}
                        >+Add New UPI
                    </Button>): null
                }
                {
                    newUpi ? (<Button 
                        variant="contained" 
                        color="secondary"
                        onClick={() => {setUpi(false)}}
                        style={{marginTop:"8px"}}
                        >Save
                    </Button>): null
                }
            </Box>
        </Box>
    )
}
function GetAccounDetails(){
    return(
        <Box>
        <Card style={{maxWidth:300}}>
                <CardContent>
                    <Box display="flex">
                        <Box>
                        <Radio
                            onChange = {e => console.log(">>>>>>>>>>>>>>")}
                            checked = {false}
                        />
                        </Box>
                        <Box style={{
                            maxWidth:"300px", minWidth:"250px"
                        }}>
                            <Typography>Ujjwal Kumar</Typography>
                            <Typography variant="subtitle2">9511807518, pathakujjwal93@gmail.com</Typography>
                            <Typography variant="subtitle2">Life Republic, Marunhi</Typography>
                            <Typography variant="subtitle2">Pune maharastra</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
    </Box>
    )
}
function SetBankDetails(){
    const[newAccount,setNewAccount] = useState(false)
    return(
        <Box display="flex" mt={2}>
            <Box>
                {newAccount ? (
                <Box>
                    <TextField 
                        id="standard-name" 
                        label="Account holder Name" 
                        // value={"test"} 
                        required = {true}
                        variant = "filled"
                        style={{
                            maxWidth:"300px", minWidth:"250px"
                        }}
                        // style={{maxWidth:300, marginTop:"8px"}}
                        InputLabelProps={{
                            shrink: true,
                            }}
                    />
                    <TextField 
                        id="standard-name" 
                        label="Bank Name" 
                        // value={"test"} 
                        required = {true}
                        variant = "filled"
                        style={{
                            maxWidth:"300px", minWidth:"250px",marginBottom:"8px"
                        }}
                        InputLabelProps={{
                            shrink: true,
                            }}
                    />
                    <TextField 
                        id="standard-name" 
                        label="IFSC Code" 
                        // value={"test"} 
                        required = {true}
                        variant = "filled"
                        style={{
                            maxWidth:"300px", minWidth:"250px",marginBottom:"8px"
                        }}
                        InputLabelProps={{
                            shrink: true,
                            }}
                    />
                </Box>
                  
                  ): null}
                {
                    !newAccount ? (<Button 
                        variant="contained" 
                        color="secondary"
                        onClick={() => {setNewAccount(true)}}
                        style={{marginTop:"8px"}}
                        >+Add New Bank Account
                    </Button>): null
                }
                {
                    newAccount ? (<Button 
                        variant="contained" 
                        color="secondary"
                        onClick={() => {setNewAccount(false)}}
                        style={{marginTop:"8px"}}
                        >Save
                    </Button>): null
                }
            </Box>
        </Box>
    )
}
function Bank(){
    return (
       <Box>
            <GetAccounDetails/>
            <SetBankDetails/>
       </Box>
    )
}
export default function BankDetails(){
    // const[newUpi, setUpi] = useState(false)
    const [value, setValue] = useState("Cash")
    const handleChange = e => {
        setValue(e.target.value)
    }
    return(
        <Box>
                <Box>
                    <InputLabel id="demo-simple-select-disabled-label">Select Payment Method</InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="pay_method"
                        value={value}
                        label="Select Payment Method"
                        onChange={handleChange}
                        style={{
                            maxWidth:"300px", minWidth:"250px",marginBottom:"8px"
                        }}
                    >
                        <MenuItem value="">
                        </MenuItem>
                        <MenuItem value={"Cash"}>Cash</MenuItem>
                        <MenuItem value={"Upi"}>UPI</MenuItem>
                        <MenuItem value={"Bank Account"}>Bank Account</MenuItem>
                    </Select>
                </Box>
                <Box>
                    {
                        value === "Upi" ? (<Upi/>) : null
                    }
                    {
                        value === "Bank Account" ? (<Bank/>) : null
                    }
                </Box>
        </Box>
        // <Upi/>
    )
}