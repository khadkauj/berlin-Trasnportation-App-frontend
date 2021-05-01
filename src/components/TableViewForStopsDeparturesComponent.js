import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import { Card, Grid } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import "./TableViewForStops.css"

const TableViewForStopsDetails = ({ data }) => {
    console.log("***", data);
   
    return (
        <div className="main__div" >

            <h1>Possible stops</h1>
            {data.length > 0 ? <Paper elevation={3} className="paper" >
            <TableContainer component={Card}>
                <Table className="" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Direction</TableCell>
                            <TableCell >Platform No.</TableCell>
                                <TableCell >Scheduled Date</TableCell>
                            <TableCell >Mode</TableCell>
                            <TableCell >Operator</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.tripId}>
                                <TableCell >{row.direction != null ? row.direction : "NA"}</TableCell>
                                <TableCell >{row.platform != null ? row.platform : "NA"}</TableCell>
                                <TableCell >{row.plannedWhen != null ? new Date(row.plannedWhen).toLocaleString() : "NA"}</TableCell>
                                <TableCell >{row.line.mode != null ? row.line.mode : "NA"}</TableCell>
                                <TableCell >{row.line.operator.name != null ? row.line.operator.name : "NA"}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Paper> :
                <h3>No Data Available</h3>
        
         
            }

           
        </div>

    );
}

export default TableViewForStopsDetails;

