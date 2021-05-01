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

    const [state, setstate] = useState()
    const idsFromLocalStorage = JSON.parse(localStorage.getItem("Favourite"))
    const arraysOfIds = idsFromLocalStorage?.split("A")
    
    data.forEach(element => {
        if (element.id === null) {
            const index = data.indexOf(element)
            data.splice(index, 1)
            // arraysOfIdFromLocalStorage.push(element.id)
        }
        
    });

    const setFav = (stopId) => {
        localStorage.setItem(stopId, "fav")
        localStorage.setItem("Favourite", JSON.stringify(localStorage.getItem("Favourite") ? JSON.parse(localStorage.getItem("Favourite")) + "A"+ stopId : stopId))
        setstate({})

    }

    const removeFav = (stopId) => {
        localStorage.removeItem(stopId)
        // arraysOfIdFromLocalStorage?.forEach(element => {
        //     if (element === stopId) {
        //         arraysOfIdFromLocalStorage.splice(arraysOfIdFromLocalStorage.indexOf(element), 1)
        //     }
        // });
        setstate({})

    }

    return (
        <div className="main__div" >
            <Paper elevation={3} className="paper" >
            <TableContainer >
                <Table className="" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Stops</TableCell>
                            <TableCell >Bus</TableCell>
                            <TableCell >Tram</TableCell>
                            <TableCell >Ferry</TableCell>
                            <TableCell >Suburban</TableCell>
                            <TableCell >Express</TableCell>
                            <TableCell >Regional</TableCell>
                            <TableCell >See More</TableCell>
                            <TableCell >Mark Favourite</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell >{row.products?.bus === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                <TableCell >{row.products?.tram === true ? <DoneIcon />  : <ClearIcon></ClearIcon>}</TableCell>
                                <TableCell >{row.products?.ferry === true ? <DoneIcon />  : <ClearIcon></ClearIcon>}</TableCell>
                                <TableCell >{row.products?.suburban === true ? <DoneIcon />  : <ClearIcon></ClearIcon>}</TableCell>
                                <TableCell > {row.products?.express === true ? <DoneIcon />  : <ClearIcon></ClearIcon>}</TableCell>
                                <TableCell >{row.products?.regional === true ? <DoneIcon />  : <ClearIcon></ClearIcon>}</TableCell>
                                <TableCell ><Link to={row.id}>See more</Link></TableCell>
                                <TableCell >
                                {localStorage.getItem(row.id) === "fav" ?
                                        <FavoriteIcon onClick={e => { removeFav(row.id); }}>SetFav</FavoriteIcon> : <FavoriteBorderIcon onClick={e => {setFav(row.id)}}>RemFav</FavoriteBorderIcon>}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </Paper>
             <FavouriteStops ids={arraysOfIds}  />
        </div>

    );
}
