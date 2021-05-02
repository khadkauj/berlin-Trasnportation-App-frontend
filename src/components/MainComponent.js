import React, { useEffect, useState } from "react";
import TableViewForStops from "./TableViewForStopsComponents";
import { FormControl, Input, InputAdornment, InputLabel } from "@material-ui/core";
import PlaceIcon from '@material-ui/icons/Place';
import axios from "axios"

const MainComponent = () => {
    const [stop, setstop] = useState("Airport");
    const [stopsList, setstopsList] = useState([]);
    useEffect(() => {
        axios.get(`https://berlin-trasnportation-app.herokuapp.com/api/getlocation/${stop}`)
            .then((stopsList) => { setstopsList(stopsList.data); })
            .catch(console.error);
    }, [stop]);

    return (
        <div>
            <div style={{ "position": "sticky", "top": 0, "backgroundColor": "white", "padding": "10px", "zIndex": 1 }}>
                <h1 style={{ "marginTop": 0 }} >Berlin Transportation APP</h1>
                <p style={{ "marginTop": "-14px", "fontFamily" : "cursive" }} ><strong>Your Guide to every stop in Berlin</strong></p>
            </div>
            <FormControl className="">
                <InputLabel htmlFor="input-with-icon-adornment">Enter your stop.</InputLabel>
                <Input
                    autoFocus
                    value={stop}
                    onChange={(event) => { setstop(event.target.value) }}
                    id="input-with-icon-adornment"
                    startAdornment={
                        <InputAdornment position="start">
                            <PlaceIcon />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <TableViewForStops data={stopsList} />
        </div>
    );
};
export default MainComponent;
