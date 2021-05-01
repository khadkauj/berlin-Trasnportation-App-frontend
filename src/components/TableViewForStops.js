import React, { useState } from 'react';
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
import FavouriteStops from './FavouriteStops';


export default function TableViewForStops({ data }) {

    const [state, setstate] = useState({})
    const idsFromLocalStorage = JSON.parse(localStorage.getItem("Favourite"))
    const arraysOfIds = idsFromLocalStorage?.split("A")

    data.forEach(element => {
        if (element.id === null) {
            const index = data.indexOf(element)
            data.splice(index, 1)
        }

    });

    const setFav = (stopId) => {
        localStorage.setItem(stopId, "fav")
        localStorage.setItem("Favourite", JSON.stringify(localStorage.getItem("Favourite") ? JSON.parse(localStorage.getItem("Favourite")) + "A" + stopId : stopId))
        setstate({})
        window.location.reload()
    }

    //there are high chances that a bug will appear when we remove elemenet from
    //the first or last as it will has A at different position
    const removeFav = (stopId) => {
        localStorage.removeItem(stopId)
        arraysOfIds?.splice(arraysOfIds.indexOf(stopId), 1)
        localStorage.removeItem("Favourite")
        arraysOfIds?.forEach(element => {
            if (arraysOfIds.length > 0 && element.length > 0) {
                localStorage.setItem("Favourite", JSON.stringify(localStorage.getItem("Favourite") ? JSON.parse(localStorage.getItem("Favourite")) + "A" + element : element))
            }
        });
        setstate({})
        window.location.reload()
    }

    return (
        <div className="main__div" >
            <Paper elevation={3} className="paper" >
                <TableContainer >
                    <Table className="" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Stops</TableCell>
                                <TableCell align="center" >Bus</TableCell>
                                <TableCell align="center">Tram</TableCell>
                                <TableCell align="center">Ferry</TableCell>
                                <TableCell align="center">Suburban</TableCell>
                                <TableCell align="center">Express</TableCell>
                                <TableCell align="center">Regional</TableCell>
                                <TableCell align="center">See More</TableCell>
                                <TableCell align="center">Mark Favourite</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center" >{row.products?.bus === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                    <TableCell align="center">{row.products?.tram === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                    <TableCell align="center">{row.products?.ferry === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                    <TableCell align="center">{row.products?.suburban === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                    <TableCell align="center"> {row.products?.express === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                    <TableCell align="center">{row.products?.regional === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                    <TableCell align="center"><Link to={row.id}>See more</Link></TableCell>
                                    <TableCell align="center">
                                        {localStorage.getItem(row.id) === "fav" ?
                                            <FavoriteIcon onClick={e => { removeFav(row.id); }}>SetFav</FavoriteIcon> : <FavoriteBorderIcon onClick={e => { setFav(row.id) }}>RemFav</FavoriteBorderIcon>}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <FavouriteStops state={state} ids={arraysOfIds} />
        </div>

    );
}
