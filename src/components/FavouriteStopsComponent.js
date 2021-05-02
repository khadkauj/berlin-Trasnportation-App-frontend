import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import "./TableViewForStops.css"
import axios from "axios"


const FavouriteStops = ({ state, ids }) => {
    console.log("ids", ids);
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

    console.log("fav", favouriteStops);

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
                                        <TableCell>Stops</TableCell>
                                        <TableCell >Bus</TableCell>
                                        <TableCell >Tram</TableCell>
                                        <TableCell >Ferry</TableCell>
                                        <TableCell >Suburban</TableCell>
                                        <TableCell >Express</TableCell>
                                        <TableCell >Regional</TableCell>
                                        <TableCell >See More</TableCell>
                                        <TableCell style={{ display: "none" }}  >Mark Favourite</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {favouriteStops.map((row) => (
                                        row === undefined || row?.isHafasError === true ? <></> :
                                            <TableRow key={row.id ? row.id : Math.random()}>
                                                <TableCell component="th" scope="row">
                                                    {row?.name}
                                                </TableCell>
                                                <TableCell >{row?.products?.bus === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                                <TableCell >{row?.products?.tram === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                                <TableCell >{row?.products?.ferry === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                                <TableCell >{row?.products?.suburban === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                                <TableCell > {row?.products?.express === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                                <TableCell >{row?.products?.regional === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                                <TableCell ><Link to={row.id}>See more</Link></TableCell>

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
