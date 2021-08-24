import {React,useState} from 'react';
import { Typography,Box,Grid,Checkbox,FormControlLabel, Button } from '@material-ui/core';
// import { Button } from 'bootstrap';

export default function CheckCondition(props){
    var queList1 = [{q:"Are you able to make and receive calls?",d:"Check your device for cellular network connectivity issues.",is_checked:false},
    {id:1,q:"Are you able to make and receive calls?",d:"Check your device for cellular network connectivity issues.",is_checked:false},
    {id:2,q:"Are you able to make and receive calls?",d:"Check your device for cellular network connectivity issues.",is_checked:false},
    {id:3,q:"Are you able to make and receive calls?",d:"Check your device for cellular network connectivity issues.",is_checked:false},
    {id:4,q:"Are you able to make and receive calls?",d:"Check your device for cellular network connectivity issues.",is_checked:false},
    ]
    const [isChecked, setIsChecked] = useState(false);
    let phone = props.location.state.phone
    console.log(props.location.state.phone)
    const[queList,setQueList] = useState(
        [{q:"Are you able to make and receive calls?",d:"Check your device for cellular network connectivity issues.",is_checked:false},
    {id:1,q:"Are you able to make and receive calls?",d:"Check your device for cellular network connectivity issues.",is_checked:false},
    {id:2,q:"Are you able to make and receive calls?",d:"Check your device for cellular network connectivity issues.",is_checked:false},
    {id:3,q:"Are you able to make and receive calls?",d:"Check your device for cellular network connectivity issues.",is_checked:false},
    {id:4,q:"Are you able to make and receive calls?",d:"Check your device for cellular network connectivity issues.",is_checked:false},
    ]
    )
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
                                console.log(".....",que.id+"Y")
                                return(
                                    <Box margin={3} boxShadow={2} padding={3}>
                                        <Typography variant="h5">{que.q}</Typography>
                                        <Typography variant="subtitle1">{que.d}</Typography>

                                        <FormControlLabel
                                        control={
                                            <Checkbox
                                                key={que.id+"Y"}
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
                                                    key={que.id+"N"}
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
                    <Box boxShadow={2} padding={8}>
                        <Box display="flex" flexDirection="row">
                            <img src = "https://images-na.ssl-images-amazon.com/images/I/71-Su4Wr0HL._SY741_.jpg" style={{
                            maxWidth:"20%",
                            height:"auto",
                            }}/>
                            <Box padding={3}>
                            <Typography  variant="h6">{phone}</Typography>
                            <Typography color="secondary">4GB/64GB</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box padding={6}>
                        <Box>
                        <Typography variant="h5">Device Evaluation</Typography>
                        </Box>
                        <Box marginTop={3}>
                        <Typography variant="h6" color="secondary">Device Details</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
    )
}