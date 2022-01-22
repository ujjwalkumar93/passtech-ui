import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function PriceTable(props){
    console.log("props are: ",props.data)
    // const calculatePrice = () => {
    //     let totalDepritiation = 0
    //     props.data.primaryCondition.map(i=> {
    //         if(i.n){
    //           totalDepritiation+=parseFloat(i.valuation)
    //         }
    //     })
    //     let estimated_price = 0
    //     console.log("totalDepritiation: ",totalDepritiation)
    //     estimated_price = parseFloat(props.location.state.mobileInfo.maximum_price) - totalDepritiation/100*parseFloat(props.location.state.mobileInfo.maximum_price)
    //     return estimated_price
    // }
    function createData(name, price) {
        return { name, price};
        }
        //let x = 0
        //x = calculatePrice()
        const rows = [
        createData('Base Price', props.data),
        createData('Pickup charge', "Free"),
        createData('Total Price', props.data),
        ];
    return(
        <TableContainer>
            <Table  aria-label="simple table">
                <TableBody>
                {rows.map((row) => (
                    <TableRow key="id">
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
      
}