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
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';


export default function TableViewForStops({ data }) {

    data.forEach(element => {
        if (element.id === null) {
            const index = data.indexOf(element)
            data.splice(index, 1)
        }
        
    });

     const setFav = (stopId) => {
        localStorage.setItem(stopId, "fav")
    }

    const removeFav = (stopId) => {
        localStorage.removeItem(stopId)
    }

    return (
        <div className="" >
            <TableContainer component={Card}>
                <Table className="table" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Stops</TableCell>
                            <TableCell align="right">Bus</TableCell>
                            <TableCell align="right">Tram</TableCell>
                            <TableCell align="right">Ferry</TableCell>
                            <TableCell align="right">Suburban</TableCell>
                            <TableCell align="right">Express</TableCell>
                            <TableCell align="right">Regional</TableCell>
                            <TableCell align="right">See More</TableCell>
                            <TableCell align="right">Mark Favourite</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.products?.bus === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                <TableCell align="right">{row.products?.tram === true ? <DoneIcon />  : <ClearIcon></ClearIcon>}</TableCell>
                                <TableCell align="right">{row.products?.ferry === true ? <DoneIcon />  : <ClearIcon></ClearIcon>}</TableCell>
                                <TableCell align="right">{row.products?.suburban === true ? <DoneIcon />  : <ClearIcon></ClearIcon>}</TableCell>
                                <TableCell align="right"> {row.products?.express === true ? <DoneIcon />  : <ClearIcon></ClearIcon>}</TableCell>
                                <TableCell align="right">{row.products?.regional === true ? <DoneIcon />  : <ClearIcon></ClearIcon>}</TableCell>
                                <TableCell align="right"><Link to={row.id}>See more</Link></TableCell>
                                <TableCell align="right">
                                {localStorage.getItem(row.id) === "fav" ?
                                        <FavoriteIcon onClick={e => { removeFav(row.id); console.log("hah"); }}>SetFav</FavoriteIcon> : <FavoriteBorderIcon onClick={e => {setFav(row.id)}}>RemFav</FavoriteBorderIcon>}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}
