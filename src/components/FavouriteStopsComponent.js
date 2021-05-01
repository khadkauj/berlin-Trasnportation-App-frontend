import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import "./TableViewForStops.css"
const createClient = require('hafas-client')
const vbbProfile = require('hafas-client/p/vbb')


const FavouriteStops = ({ state, ids }) => {
    const client = createClient(vbbProfile, 'my-awesome-program')
    const [favouriteStops, setfavouriteStops] = useState([])
    useEffect(() => {
        let arrayOfPromises = ids?.map(id => (
            client.stop(id)
                .then(data => data) //returning data
                .catch(console.error)))

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
            {favouriteStops.length === 0 ? <p>No Favourite Stops</p> : <div><h5>Favourite Stops with Availability</h5>
                <Paper elevation={3} className="paper" style={{ "marginBottom": "40px" }}>
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
                                    row !== undefined ?
                                        <TableRow key={row.id}>
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

                                        </TableRow> : < ></>

                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper></div>}

            <footer style={{ "paddingBottom": "54px" }}><strong>Created by Ujjwal for Fun</strong></footer>
        </div>
    )
}

export default FavouriteStops
