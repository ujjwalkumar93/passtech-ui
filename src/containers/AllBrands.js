import React from 'react';
import { Typography,Box } from '@material-ui/core';
import Searchbox from '../components/header/Searchbox.js';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import { alpha, makeStyles } from '@material-ui/core/styles';

var img_path = [
    {path: "https://s3n.cashify.in/cashify/brand/img/xhdpi/cb96df6e-080f.jpg", key:'1'},
    {path: "https://s3n.cashify.in/cashify/brand/img/xhdpi/1071214e-b44f.jpg", key:'2'},
    {path: "https://s3n.cashify.in/cashify/brand/img/xhdpi/406a512d-e8dd.jpg", key:'3'},
    {path: "https://s3n.cashify.in/cashify/brand/img/xhdpi/0124cc45-3a6c.jpg", key:'4'},
    {path: "https://s3n.cashify.in/cashify/brand/img/xhdpi/cb96df6e-080f.jpg", key:'1'},
    {path: "https://s3n.cashify.in/cashify/brand/img/xhdpi/1071214e-b44f.jpg", key:'2'},
    {path: "https://s3n.cashify.in/cashify/brand/img/xhdpi/406a512d-e8dd.jpg", key:'3'},
    {path: "https://s3n.cashify.in/cashify/brand/img/xhdpi/0124cc45-3a6c.jpg", key:'4'},
    {path: "https://s3n.cashify.in/cashify/brand/img/xhdpi/cb96df6e-080f.jpg", key:'1'},
    {path: "https://s3n.cashify.in/cashify/brand/img/xhdpi/1071214e-b44f.jpg", key:'2'},
    {path: "https://s3n.cashify.in/cashify/brand/img/xhdpi/406a512d-e8dd.jpg", key:'3'},
    {path: "https://s3n.cashify.in/cashify/brand/img/xhdpi/0124cc45-3a6c.jpg", key:'4'}
]

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.primary.main
      },
      "root:hover": {
        "background-color": "#5469d4"
      }
    })
)
export default function AllBrands(){
    const classes = useStyles();
    var deviceWidth = window.screen.width*.65
    console.log(deviceWidth)
    return(
        <Box>
            <Box marginLeft={5} marginTop={5} display="flex" justifyContent="center" my={4}>
                <Typography variant="h5">Sell Old Mobile Phone</Typography>
            </Box>
            <Box display={"flex"} justifyContent="center">
                <Searchbox/>
            </Box>
            <Box marginLeft={5} marginTop={5}>
                <Typography variant="h6">Select Brand</Typography>
            </Box>
            <Box display="flex" flexWrap="wrap" className={"classes.root"}>
                {
                    img_path.map(img => {
                        return(
                            <Card>
                                <img key={img.key} src={img.path} />
                            </Card>
                        )
                    })
                }
                {/* <Button style={{marginY:10,textTransform: 'capitalize'}}><b>More brands >></b></Button> */}
            </Box>   
        </Box>
            
    )
}