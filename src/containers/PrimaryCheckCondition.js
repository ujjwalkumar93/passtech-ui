
import {React,useState,useEffect} from 'react';
import { Typography,Box,Grid,Checkbox,FormControlLabel,Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
// import { Button } from 'bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
  
export default function CheckCondition(props){
    let history = useHistory()
    const classes = useStyles();
    const[queList,setQueList] =useState ([]);
    const[valuationMapper,setValuationMapper] = useState([])

    console.log("props.location.state:>>>>>>: ",props.location.state)

useEffect(() => {
    async function phoneCondition(){
      let url = `http://139.59.89.95/api/method/pastech_app.api.get_primary_condition_check?mobile=${props.match.params.model}`
      console.log("url is: ",url)
      let response = await fetch(url, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }})
      let data = await response.json();
      setQueList(data.message)

    }
    phoneCondition()
  },[])

    const[ansList,setAnsList] =useState([])

        const handleCheck = (e) => {
            let objIndex = queList.findIndex((obj => obj.name == e.id));
            console.log("queList is: ",queList)
            if(e.key === "y"){
                if(!queList[objIndex].n){
                    queList[objIndex].y = e.val
                }
                
            }
            if(e.key === "n"){
                if(!queList[objIndex].y){
                    queList[objIndex].n = e.val
                }
            }
            setQueList([...queList])
        }
        useEffect(() => {
            let a = []
            let v = []
            queList.map(q => {
                if(q.y){
                    a.push(q.yes)
                }
                if(q.n){
                    a.push(q.no)
                    v.push(parseFloat(q.valuation))
                }

            })
            setAnsList([...a])
            setValuationMapper([...v])

            console.log("queList >>>>>>>>>>>>>>>>>>>>>>>: ",)
            console.log(queList)

        },[queList])
        useEffect(() => {
            console.log("valuationMapper is: ", valuationMapper)
            console.log("ANSList is: ",ansList)
        },[valuationMapper])
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
                                        <Typography variant="h5">{que.questation}</Typography>
                                        <Typography variant="subtitle1">{que.description}</Typography>

                                        <FormControlLabel
                                        control={
                                            <Checkbox
                                                key={que.name+"Y"}
                                                checked={que.y}
                                                onChange={(e) =>  handleCheck({id:que.name,val:!que.y,key:"y"})}
                                                name="checkedA"
                                                color="secondary"
                                            />
                                            }
                                            label="Yes"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    key={que.name+"N"}
                                                    checked={que.n}
                                                    onChange={(e) => handleCheck({id:que.name,val:!que.n,key:"n"})}
                                                    name="checkedB"
                                                    color="secondary"
                                                />
                                                }
                                                label="No"
                                        />
                                    </Box>
                                )
                            })
                        }
                            <Box justifyContent="center" display="flex" marginBottom={12}>
                                <Button 
                                    variant="contained" 
                                    size="large" 
                                    color="secondary"
                                    onClick={() => {
                                        if(ansList.length != queList.length){
                                            alert("Please answer all the question")
                                        }
                                        else {
                                            const data = {
                                                mobileInfo:props.location.state.mobileInfo,
                                                primaryCondition:queList,
                                                secondryCondition:props.location.state.secondryCondition
                                            }
                                            history.push(`/checkout`,data)
                                        }
                                        
                                    }}
                                    >Next</Button>
                            </Box>
                        </Box>
                    </Box>
                    </Grid>
                <Grid item lg={4} xs={12}>
                    <Box boxShadow={2} padding={8}>
                        <Box display="flex" flexDirection="row" flexWrap="wrap">
                            <img src = {props.location.state.mobileInfo.img_src} style={{
                            maxWidth:"50%"
                            }}/>
                            <Box padding={3}>
                            <Typography  variant="h6">{props.location.state.mobileInfo.model}</Typography>
                            <Typography color="secondary">{props.location.state.mobileInfo.ram}GB</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box padding={6}>
                        <Box>
                        <Typography variant="h5">Device Evaluation</Typography>
                        </Box>
                        <Box marginTop={3}>
                        <Typography variant="h6" color="secondary">Device Details</Typography>
                        {   
                                ansList.map(ans => {
                                    return(
                                        <li style={{color:"green"}}>{ans}</li>
                                    )
                                })
                        }
                        </Box>
                    </Box>
                </Grid>
            </Grid>
    )
}