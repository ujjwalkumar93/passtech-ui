import {Box,Card,CardActions,CardContent,Button,Typography,Radio} from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
//import { func } from 'react-bootstrap/node_modules/@types/prop-types';
export default function GetAddress(props) {
  const[addressList,setAddressList] = useState([])
  function get_user_address(usr) {
    var url = `http://139.59.89.95/api/method/pastech_app.api.get_address?email=pathakujjwal93@gmail.com`
    fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then(r => r.json())
    .then(r => {
      console.log("trying...............")
        console.log(r);
        if(r.message){
          console.log("resp is: ",r.message)
          setAddressList(r.message)
        }
    })
  }
  useEffect(() => {
    get_user_address("usr")
  },[])
  return (
    //{
      addressList.map(i => {
          return (
            <Card style={{maxWidth:300}}>
            <CardContent>
            <Box display="flex">
              <Box>
              <Radio
                onChange = {e => console.log(">>>>>>>>>>>>>>")}
                checked = {false}
              />
              </Box>
              <Box>
              <Typography>{i.full_name}</Typography>
              <Typography variant="subtitle2">{i.mobile}</Typography>
              <Typography variant="subtitle2">{i.city}</Typography>
              <Typography variant="subtitle2">{i.postal_code}</Typography>
              </Box>
      
            </Box>
            </CardContent>
          </Card>
          )
      })
    //}
  );
}