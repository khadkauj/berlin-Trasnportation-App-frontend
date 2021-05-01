import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import "./TableViewForStops.css"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
const createClient = require('hafas-client')
const vbbProfile = require('hafas-client/p/vbb')


const FavouriteStops = ({ ids }) => {

    console.log("ids", ids);
    const client = createClient(vbbProfile, 'my-awesome-program')
    const [favouriteStops, setfavouriteStops] = useState([])
    const letstry = []
    const tasks = []
    for (let index = 0; index < ids?.length; index++) {
        tasks.push(client.stop(ids[index]) // U Spichernstr.
                    .then(data => {
                        console.log(data);
                        if (data) {
                            letstry.push(data)
                        }
                    })
                    .catch(console.error))
        
    }
    const arrayOfPromises = tasks.map(task => task)

    useEffect(() => {
        Promise.all(arrayOfPromises).then(
            setfavouriteStops(letstry)
        )
    }, [])

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
                            {favouriteStops.map((row) => (
                                <TableRow key={Math.random()}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell >{row.products?.bus === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                    <TableCell >{row.products?.tram === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                    <TableCell >{row.products?.ferry === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                    <TableCell >{row.products?.suburban === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                    <TableCell > {row.products?.express === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                    <TableCell >{row.products?.regional === true ? <DoneIcon /> : <ClearIcon></ClearIcon>}</TableCell>
                                    <TableCell ><Link to={row.id}>See more</Link></TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

        </div>
    )
}

export default FavouriteStops
