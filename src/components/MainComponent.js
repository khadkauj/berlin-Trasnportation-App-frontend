import React, { useEffect, useState } from "react";
import createClient from "hafas-client";
import vbbProfile from "hafas-client/p/vbb";
import TableViewForStops from "./TableViewForStopsComponents";
import { FormControl, Input, InputAdornment, InputLabel } from "@material-ui/core";
import PlaceIcon from '@material-ui/icons/Place';

const MainComponent = () => {
    const [stop, setstop] = useState("Airport");
    const [stopsList, setstopsList] = useState([]);
    useEffect(() => {
        const client = createClient(vbbProfile, "my-awesome-program");
        if (stop !== "") {
            client
                .locations(stop, { results: 5 })
                .then((stopsList) => {
                    setstopsList(stopsList);
                })
                .catch(console.error);
        }
    }, [stop]);

    return (
        <div>
            <div style={{ "position": "sticky", "top": 0, "backgroundColor": "white", "padding": "10px", "zIndex": 1 }}>
                <h1 style={{ "marginTop": 0 }} >Berlin Transportation APP</h1>
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