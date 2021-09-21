import {Box,Card,CardActions,CardContent,Button,Typography,TextField,Radio} from '@material-ui/core';
import { useState } from 'react';

export default function BankDetails(){
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