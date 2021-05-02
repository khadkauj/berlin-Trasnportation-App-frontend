import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Card } from '@material-ui/core';
import "./TableViewForStops.css"

const TableViewForStopsDetails = ({ data }) => {

    return (
        <div className="main__div" >
            <h1>Possible stops</h1>
            {data.length > 0 ? <Paper elevation={3} className="paper" >
                <TableContainer component={Card}>
                    <Table className="" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" >Direction</TableCell>
                                <TableCell align="center" >Platform No.</TableCell>
                                <TableCell align="center">Scheduled Date</TableCell>
                                <TableCell align="center">Mode</TableCell>
                                <TableCell align="center">Operator</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow key={row.tripId}>
                                    <TableCell align="right">{row.direction != null ? row.direction : "NA"}</TableCell>
                                    <TableCell align="center">{row.platform != null ? row.platform : "NA"}</TableCell>
                                    <TableCell align="center">{row.plannedWhen != null ? new Date(row.plannedWhen).toLocaleString() : "NA"}</TableCell>
                                    <TableCell align="center">{row.line.mode != null ? row.line.mode : "NA"}</TableCell>
                                    <TableCell align="center">{row.line.operator.name != null ? row.line.operator.name : "NA"}</TableCell>
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

