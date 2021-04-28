import React, { useEffect, useState } from "react";
import createClient from "hafas-client";
import vbbProfile from "hafas-client/p/vbb";
import TableViewForStops from "./TableViewForStops";

const MainComponent = () => {
    const [stop, setstop] = useState(" ");
    const [stopsList, setstopsList] = useState([]);
    console.log("*", stop);

    useEffect(() => {
        const client = createClient(vbbProfile, "my-awesome-program");

        client
            .locations(stop, { results: 5 })
            .then((stopsList) => {
                console.log(stopsList);
                setstopsList(stopsList);
            })
            .catch(console.error);
    }, [stop]);

    return (
        <div>
            <h1>Hello</h1>
            <input
                type="text"
                value={stop}
                onChange={(event) => setstop(event.target.value)}
            />
            <TableViewForStops data={stopsList} />
        </div>
    );
};
export default MainComponent;
