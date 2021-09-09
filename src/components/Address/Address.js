import React, { useState } from 'react';
import { Box, Typography ,Button,TextField} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
export default function SetAddress(){
    console.log("called.....")
    const stateList = [
      {state: "maharastra"},
      {state: "Goa"},
  ]
    return(
        <Box display="flex" flexDirection="column" my={8}>
            <div style={{marginTop:"8px"}}>
              <TextField 
                  id="standard-name" 
                  label="Full Name" 
                  // value={"test"} 
                  required = {true}
                  variant = "filled"
                  style={{width:300}}
                  InputLabelProps={{
                      shrink: true,
                    }}
                  />
            </div>
            <div style={{marginTop:"8px"}}>
              <TextField 
                  my={2}
                  id="standard-name" 
                  label="Phone Number" 
                  // value={"test"} 
                  required = {true}
                  variant = "filled"
                  style={{width:300}}
                  InputLabelProps={{
                      shrink: true,
                    }}
                  />
            </div>
            <div style={{marginTop:"8px"}}>
              <TextField 
                  id="standard-name" 
                  label="Email Id" 
                  // value={"test"} 
                  required = {true}
                  variant = "filled"
                  style={{width:300}}
                  InputLabelProps={{
                      shrink: true,
                    }}
                  />
            </div>
            <div style={{marginTop:"8px"}}>
              <TextField 
                  my={2}
                  id="standard-name" 
                  label="Complete Address" 
                  // value={"test"} 
                  multiline = {true}
                  rows={4}
                  required = {true}
                  variant = "filled"
                  style={{width:300}}
                  InputLabelProps={{
                      shrink: true,
                    }}
                  />
            </div> 
            <Box display="flex" flexDirection="row" alignContent="flex-start" flexGrow={2}>
              <Box marginTop={1}>
              <TextField 
                  id="standard-name" 
                  label="City" 
                  // value={"test"} 
                  required = {true}
                  variant = "filled"
                  style={{width:150}}
                  InputLabelProps={{
                      shrink: true,
                    }}
                  />
              </Box>
              <Box marginTop={1} m={0.5}>
              <TextField 
                  my={2}
                  id="standard-name" 
                  label="Postal Code" 
                  required = {true}
                  variant = "filled"
                  style={{width:150}}
                  InputLabelProps={{
                      shrink: true,
                    }}
                  />
              </Box>
            </Box>
            <div style={{marginTop:"8px"}}>
              <Autocomplete
                id="combo-box-demo"
                options={stateList}
                getOptionLabel={(option) => option.state}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Select State" variant="filled" />}
              />
            </div> 

            <div style={{ marginTop:"8px"}}>
            <Button variant="contained" color="primary" style={{ width: 300 }}>
              Submit
            </Button>
            </div>
             
        </Box>
    )
}
