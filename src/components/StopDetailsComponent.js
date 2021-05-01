import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TableViewForStopsDetails from "./TableViewForStopsDeparturesComponent"
const createClient = require("hafas-client");
const vbbProfile = require("hafas-client/p/vbb");
const StopDetails = () => {
  const { stop } = useParams()
  const [departuresDetails, setdeparturesDetails] = useState([])

  useEffect(() => {
    const client = createClient(vbbProfile, "my-awesome-program");
    // S Charlottenburg
    client
      .departures(stop, { duration: 3 })
      .then(data => {
        setdeparturesDetails(data)
      })
      .catch(console.error);
  }, [stop]);

  return <div>
    <TableViewForStopsDetails data={departuresDetails} />

  </div>
};

export default StopDetails;
