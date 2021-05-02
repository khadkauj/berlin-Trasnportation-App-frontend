import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import "./TableViewForStops.css"
import axios from "axios"


const FavouriteStops = ({ state, ids }) => {
    const [favouriteStops, setfavouriteStops] = useState([])
    useEffect(() => {
        let arrayOfPromises = ids?.map(id => (
            axios.get(`https://berlin-trasnportation-app.herokuapp.com/api/stopdetails/${id}`)
                .then(stopsList => stopsList.data)
                .catch(console.error)
        ))

        if (arrayOfPromises !== undefined) {
            Promise.all(arrayOfPromises).then(data => {
                setfavouriteStops(current => [...current, ...data])
            }
            )
        }
    }, [])

    return (
        <div className="main__div" >
            {/* Stops though favourite but if have no availability won't appear */}
            {favouriteStops.length === 0 ? <p>No Favourite Stops</p> :
                <div ><div style={{ "margin": "24px" }} ><strong>Favourite Stops with Availability</strong></div>
                    <Paper elevation={3} className="paper" >
                        <TableContainer >
                            <Table className="" aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">Stops</TableCell>
                                        <TableCell align="center">Bus</TableCell>
                                        <TableCell align="center">Tram</TableCell>
                                        <TableCell align="center">Ferry</TableCell>
                                        <TableCell align="center">Suburban</TableCell>
                                        <TableCell align="center">Express</TableCell>
                                        <TableCell align="center">Regional</TableCell>
                                        <TableCell align="center">See More</TableCell>
                                        <TableCell style={{ display: "none" }}  align="center">Mark Favourite</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {favouriteStops.map((row) => (
                                        row === undefined || row?.isHafasError === true ? <></> :
                                            <TableRow key={row.id ? row.id : Math.random()}>
                                                <TableCell component="th" scope="row" align="center">
                                                    {row?.name}
                                                </TableCell>
                                                <TableCell align="center" >{row?.products?.bus === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                                <TableCell align="center">{row?.products?.tram === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                                <TableCell align="center">{row?.products?.ferry === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                                <TableCell align="center">{row?.products?.suburban === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                                <TableCell align="center"> {row?.products?.express === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                                <TableCell align="center">{row?.products?.regional === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                                <TableCell align="center"><Link to={row.id}>See more</Link></TableCell>

                                            </TableRow>

                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper></div>}

            <div style={{ "padding": "54px" }}><strong>Created By Ujjwal For Fun</strong></div>
        </div>
    )
}

export default FavouriteStops
