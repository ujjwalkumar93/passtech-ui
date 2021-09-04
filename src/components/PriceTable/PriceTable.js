import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default function PriceTable(props){
    function createData(name, price) {
        return { name, price};
        }

        const rows = [
        createData('Base Price', 3000),
        createData('Pickup charge', "Free"),
        createData('Total Price', 300),
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