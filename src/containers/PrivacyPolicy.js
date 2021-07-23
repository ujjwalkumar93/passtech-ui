import React from 'react';
import { Typography,Box } from '@material-ui/core';

export default function PrivacyPolicy(){
    var deviceWidth = window.screen.width*.65
    console.log(deviceWidth)
    return(
        <Box height={`${window.screen.height}px`} display="flex" justifyContent="center">
            <Box width={`${deviceWidth}px`} marginTop={10} marginBottom={10} marginLeft={5} marginRight={5}> 
                <Typography variant="h3" align="center">Privacy Policy</Typography>
                <Box marginTop={5}>
                    <Typography align="center">
                    Band is a multidisciplinary creative studio based in the Pacific Northwest.
                    Their About Us page stands out by showcasing some of their unique and creative projects.
                    No number of words could hope to tell one of their potential clients nearly as much as these pictures can.
                    In this case, the 25 pictures featured on Band’s About Us page are worth much more than the 170 actual words you’ll read on the page.
                    {/* <br> */}
                    Band is a multidisciplinary creative studio based in the Pacific Northwest.
                    Their About Us page stands out by showcasing some of their unique and creative projects.
                    No number of words could hope to tell one of their potential clients nearly as much as these pictures can.
                    In this case, the 25 pictures featured on Band’s A

                    </Typography>
                </Box>
            </Box>
        </Box>
            
    )
}