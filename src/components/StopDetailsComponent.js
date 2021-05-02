import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TableViewForStopsDetails from "./TableViewForStopsDeparturesComponent"
import axios from "axios"


const StopDetails = () => {
  const { stop } = useParams()
  const [departuresDetails, setdeparturesDetails] = useState([])

  useEffect(() => {

    axios.get(`https://berlin-trasnportation-app.herokuapp.com/api/stopdepartures/${stop}`)
    .then(data => {setdeparturesDetails(data.data)})
    .catch(console.error);
  }, [stop]);

  return <div>
    <TableViewForStopsDetails data={departuresDetails} />
  </div>
};

export default StopDetails;
