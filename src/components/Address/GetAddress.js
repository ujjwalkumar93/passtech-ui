import {Box,Card,CardActions,CardContent,Button,Typography,Radio} from '@material-ui/core';
export default function GetAddress() {
  return (
    <Card style={{maxWidth:300}}>
        {/* <CardActions>
        <Radio
        onChange = {e => console.log(">>>>>>>>>>>>>>")}
        checked = {false}
        />
        </CardActions> */}
      <CardContent>
      <Box display="flex">
        <Box>
        <Radio
        onChange = {e => console.log(">>>>>>>>>>>>>>")}
        checked = {false}
        />
        </Box>
        <Box>
        <Typography>Ujjwal Kumar</Typography>
        <Typography variant="subtitle2">9511807518, pathakujjwal93@gmail.com</Typography>
        <Typography variant="subtitle2">Life Republic, Marunhi</Typography>
        <Typography variant="subtitle2">Pune maharastra</Typography>
        </Box>

      </Box>
      </CardContent>
    </Card>
  );
}