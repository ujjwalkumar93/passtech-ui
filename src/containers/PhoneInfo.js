import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, Typography , Button} from '@material-ui/core';
//import { Button } from 'bootstrap';
const Example = (props) => {
  const [showExpPrice, setShowExpPrice] = useState(false);
  const variants = [{name:"4GB/64GB", color:"#ffa733"},{name:"6GB/128GB", color:"#8bc34a"}]
  return (
    <Container style={{height:window.screen.height}}>
    <Box boxShadow={2} marginBottom={8}>
    <Row style={{marginTop:"12%"}}>
      <Col lg={4} xs={12}>
        <img src = "https://images-na.ssl-images-amazon.com/images/I/71-Su4Wr0HL._SY741_.jpg" style={{
          maxWidth:"50%",
          margin:"64px",
        }}/>
      </Col>
      <Col lg={8} xs={12}>
        <Typography  variant="h3">Xiaomi Redmi Note 6 Pro</Typography>
        <Typography style={{fontSize:24, marginTop:8}}>Choose variant</Typography>
          {
            showExpPrice?(
              <Box>
                <Typography variant="h5">Get Upto</Typography>
                <Typography variant="h3" style={{color:"red"}}>₹10000/-</Typography>
              </Box>
            ) : null
          }
          <Box display="flex" justifyItems="center">
          {
            variants.map(btn => {
              return(
                <Button
                style={{backgroundColor:btn.color, margin:2, color:"white", height:32, width:140}}
                onClick={() => {setShowExpPrice(true)}}
                >{btn.name}</Button>
              )
            })
          }
          </Box>
          <Box>
            <Button style={{marginLeft:"64px", marginTop:18, backgroundColor:"#42c8b7", color:"white", height:50, width:160}}>Get Exact Value</Button>
          </Box>
      </Col>
      
    </Row>
    </Box>
  </Container>
  );
}

export default Example;