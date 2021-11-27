import React, { useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Hidden from '@material-ui/core/Hidden';
import Searchbox from '../components/header/Searchbox.js';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
//import { makeStyles } from '@material-ui/core/styles';
import FlareIcon from '@material-ui/icons/Flare';
import Carousel from '../components/carousel/Carousel.js'
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { useState } from 'react';
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      minWidth: 150,
    },
    media: {
      height: 140,
    },
  });
async function allBrands(){
    let response = await fetch('http://18.116.85.94/api/method/pastech_app.api.get_all_brands', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }})
    //let response = await fetch('someurltoAJsonFile.json');
    let data = await response.json();
    console.log(data);
}
export default  function Home(){
    const [brand, setBrand] = useState([])
    let history = useHistory();
    //const classes = useStyles();
    const classes = useStyles();


    useEffect(() => {
        async function allBrands(){
            let response = await fetch('http://18.117.91.127/api/method/pastech_app.api.get_all_brands', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }})
            //let response = await fetch('someurltoAJsonFile.json');
            let data = await response.json();
            console.log("brands are: ")
            console.log(data);
            setBrand(data.message)
        }
    allBrands()
    },[])
   
    var card_img = [
        {path: "https://img.freepik.com/free-photo/isolated-phone-grey-background_125540-777.jpg?size=626&ext=jpg", key:'1',title:"Check Price",content:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica"},
        {path: "https://media.wired.com/photos/5fbc19ee7d0f9cbf83c80334/master/pass/Gear-Pixel-4A-Barely-Blue-SOURCE-Google.jpg", key:'2',title:"Schedule Pickup",content:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica"},
        {path: "https://rukminim1.flixcart.com/image/416/416/kcuug7k0/mobile/g/h/e/asus-rog-phone-3-zs661ks-6a006in-original-imaftwc6nmyuyekd.jpeg?q=70", key:'3',title:"Get Paid",content:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica"},
    ]
    var value_list = ['Maximum Value','Safe & Hassle-free','Free Doorstep Pickup']
    var why_us_list = [
        {
            title: "One-stop Solution",
            description: "Sell, buy, repair or accessorize your smartphone",
        },
        {
            title: "One-stop Solution",
            description: "Sell, buy, repair or accessorize your smartphone",
        },
        {
            title: "One-stop Solution",
            description: "Sell, buy, repair or accessorize your smartphone",
        },
        {
            title: "One-stop Solution",
            description: "Sell, buy, repair or accessorize your smartphone",
        },
        {
            title: "One-stop Solution",
            description: "Sell, buy, repair or accessorize your smartphone",
        },
        {
            title: "One-stop Solution",
            description: "Sell, buy, repair or accessorize your smartphone",
        }
]
    return(
        <Box>
            <Carousel/>
            <Box color="text.primary"  margin={8}  p={1} alignItems={"center"} alignContent={"center"} boxShadow={1} paddingY={2}>
         <Typography variant={"h5"}  align={"center"}>Sell your Mobile Phone for instant cash</Typography>
         <Box display="flex" justifyContent="center" marginY={2} flexWrap="wrap">
             <Hidden only="xs">
                 {value_list.map(value => {
                     return(
                        <Box display="flex"  marginX={2} color={"red"}>
                            <CheckCircleIcon style={{ color: "green" }} fontSize="medium"/>
                            <Typography >Maximum Value</Typography>
                        </Box>
                     )
                 })}
             </Hidden>
         </Box>
         <Box display="flex" justifyContent="center" marginY={2} flexWrap="wrap">
            <Searchbox/>
         </Box>
         <Box display="flex" justifyContent="center" marginY={2} flexWrap="wrap">
            <Typography>----Or choose brand----</Typography>
         </Box>
            <Box display="flex" justifyContent="center" marginY={2} flexWrap="wrap">
                {
                    brand.slice(0,4).map(img => {
                        return(
                            <img key={img.brand_name} src={"http://18.117.91.127/"+img.brand_logo} height="100" width="100"/>
                        )
                    })
                }
                <Button style={{marginY:10,textTransform: 'capitalize'}} onClick={()=> history.push('/all_brands') }><b>More brands >></b></Button>
            </Box>   
            <Box  px={5}>
                <Box px={2} borderLeft={5} borderColor={'red'}>
                    <Typography variant="h4">
                        <b>How Passtech Works</b>
                    </Typography>
                </Box>
                <Box display="flex" flexWrap="wrap">
                    {card_img.map(card => {
                            return(
                                <Box p={2}>
                                    <Card className={classes.root}>
                                        <CardMedia
                                            className={classes.media}
                                            image= {card.path}
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {card.title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {card.content}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                            )
                    }) }
                </Box>
                <Box  bgcolor={"#eceff1"}>
                    <Box borderLeft={5} borderColor={'red'} px={2} paddingY={2}>
                        <Typography variant='h4'><b>Why Us</b></Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" marginY={2} flexWrap="wrap">
                         <Box display="flex" flexWrap="wrap">
                            {why_us_list.map(card => {
                                    return(
                                        <Box p={2}>
                                            <Card className={classes.root}>
                                                <FlareIcon style={{ color: 'red' }} fontSize="large"/>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        {card.title}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        {card.description}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Box>
                                    )
                            }) }
                        </Box>
                    </Box>
                </Box>
                <Box >
                    <Box borderLeft={5} borderColor={'red'} px={2} paddingY={2}>
                        <Typography variant='h4'><b>Our Partners</b></Typography>
                    </Box>
                    <Box display="flex" marginY={2} flexWrap="wrap" marginX={2}>
                        <Card >
                            <img height={200} width={200} src={"https://s3n.cashify.in/brandlogo/Amazon.png"}/>
                        </Card>
                    </Box>
                </Box>

            </Box>
        </Box>
        
        </Box>
        
    )
}
