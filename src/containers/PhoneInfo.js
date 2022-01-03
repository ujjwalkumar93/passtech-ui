import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, Typography , Button} from '@material-ui/core';
import Skeleton from '@mui/material/Skeleton';
import { margin } from '@mui/system';
import { useHistory } from "react-router-dom";
//import { Button } from 'bootstrap';
const Skeleton_view = () => {
  return(
    <Container style={{height:window.screen.height}}>
    <Box boxShadow={2} marginBottom={8}>
    <Row style={{marginTop:"12%"}}>
      <Col lg={4} xs={12}>
      <Skeleton animation="wave" variant="rectangular" width={280} height={500} style={{margin:20 }}/>
      </Col>
      <Col lg={8} xs={12}>
        <Skeleton animation="wave" height={60} style={{margin:20}}/>
        <Skeleton animation="wave" height={60} style={{margin:20}}/>
          <Box>
            <Skeleton animation="wave" height={60} style={{margin:20}}/>
            <Skeleton animation="wave" height={60} style={{margin:20}}/>
            <Skeleton animation="wave" height={60} style={{margin:20}}/>
          </Box>
      </Col>
      
    </Row>
    </Box>
    </Container>
  )
}
const PhoneInfo = (props) => {
  const [showExpPrice, setShowExpPrice] = useState(false);
  const[phoneDetails, setPhoneDetails] = useState()
  const variants = [{name:"4GB/64GB", color:"#ffa733"},{name:"6GB/128GB", color:"#8bc34a"},{name:"6GB/128GB", color:"#8bc34a"}]
console.log("Props data is: ",props.match.params)
  let history = useHistory();
  useEffect(() => {
    async function phoneInfo(){
      let url = `http://139.59.89.95/api/method/pastech_app.api.get_mobile_info?mobile=${props.match.params.model}`
      console.log("url is: ",url)
      let response = await fetch(url, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }})
      let data = await response.json();
      console.log("data.message is: ",data)
      setPhoneDetails(data.message)

    }
    phoneInfo()
  },[])
  //const variants = props.match.params
  return (
    phoneDetails ? (
      <Container style={{height:window.screen.height}}>
    <Box boxShadow={2} marginBottom={8}>
    <Row style={{marginTop:"12%"}}>
      <Col lg={4} xs={12}>
           <img src = {`http://139.59.89.95/${phoneDetails.phone_image}`} style={{
          maxWidth:"50%",
          margin:"64px",
        }}/>
      </Col>
      <Col lg={8} xs={12}>
        <Typography  variant="h3">{phoneDetails.name}</Typography>
        <Typography style={{fontSize:24, marginTop:8}}><b>Model:</b> {phoneDetails.model_name}</Typography>
        {/* <Typography variant="h5" style={{fontSize:24, marginTop:8}}>Specification</Typography> */}
        <Typography variant="subtitle1" ><b>RAM:</b> {phoneDetails.ram}</Typography>
        <Typography variant="subtitle1"><b>ROM:</b> {phoneDetails.rom}</Typography>
        <Box>
          <Typography variant="h5">Get Upto</Typography>
          <Typography variant="h3" style={{color:"red"}}>₹{phoneDetails.maximum_price}/-</Typography>
        </Box>
            
          <Box>
            <Button 
            style={{
              // marginLeft:"64px", 
              marginTop:18, 
              backgroundColor:"#42c8b7", 
              color:"white", 
              height:50, 
              width:160,
              marginBottom : 18,
            }}
            onClick= {() => {
              history.push(`/secondry_condition/${phoneDetails.name}`,{data: phoneDetails})
              //history.push(`/secondry_condition/${item.name`)
            }}
            >Get Exact Value</Button>
          </Box>
      </Col>
      
    </Row>
    </Box>
    </Container>
    ) : (
      <Skeleton_view/>
    )
    
    
  );
}

export default PhoneInfo;