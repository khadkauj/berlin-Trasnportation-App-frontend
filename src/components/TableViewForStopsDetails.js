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

export default function TableViewForStopsDetails({ data }) {
   
    return (
        <div className="main__div" >
            <h1>Possible stops</h1>
            <Paper elevation={3} className="paper" >
            <TableContainer component={Card}>
                <Table className="" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Direction</TableCell>
                            <TableCell align="right">Platform No.</TableCell>
                            <TableCell align="right">Scheduled Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell align="right">{row.direction != null ? row.direction : "NA"}</TableCell>
                                <TableCell align="right">{row.platform != null ? row.platform : "NA"}</TableCell>
                                <TableCell align="right">{row.plannedWhen != null ? row.plannedWhen : "NA"}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
                </Paper>
        </div>

    );
}
