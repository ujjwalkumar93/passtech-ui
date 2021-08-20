import {React,useState} from 'react';
import { Typography,Box,Grid,Checkbox,FormControlLabel, Button } from '@material-ui/core';
// import { Button } from 'bootstrap';

export default function CheckCondition(){
    var queList = [{q:"Are you able to make and receive calls?",d:"Check your device for cellular network connectivity issues."},
    {q:"Are you able to make and receive calls?",d:"Check your device for cellular network connectivity issues."},
    {q:"Are you able to make and receive calls?",d:"Check your device for cellular network connectivity issues."},
    {q:"Are you able to make and receive calls?",d:"Check your device for cellular network connectivity issues."},
    {q:"Are you able to make and receive calls?",d:"Check your device for cellular network connectivity issues."},
    ]
    const [isChecked, setIsChecked] = useState(false);
    return(
            <Grid container >
            <Grid item lg={8} xs={12}>
                <Box  paddingTop={10} display="flex" justifyContent="center" boxShadow={2} >
                    <Box>
                    <Box>
                    <Typography variant="h4">Tell us a few things about your device!</Typography>
                    </Box>
                    {
                        queList.map(que => {
                            return(
                                <Box margin={3} boxShadow={2} padding={3}>
                                    <Typography variant="h5">{que.q}</Typography>
                                    <Typography variant="subtitle1">{que.d}</Typography>

                                    <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={isChecked}
                                            onChange={(e) => {setIsChecked(!isChecked)}}
                                            name="checkedA"
                                            color="primary"
                                        />
                                        }
                                        label="Yes"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={isChecked}
                                                onChange={() => {setIsChecked(!isChecked)}}
                                                name="checkedA"
                                                color="primary"
                                            />
                                            }
                                            label="No"
                                    />
                                </Box>
                            )
                        })
                    }
                        <Box justifyContent="center" display="flex" marginBottom={12}>
                            <Button variant="contained" size="large" color="secondary">Continue</Button>
                        </Box>
                    </Box>
                </Box>

            </Grid>
            <Grid item lg={4} xs={12}>

            </Grid>
        </Grid>
    )
}