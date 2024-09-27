import Flight from "./Flight";

import { useOutletContext } from "react-router-dom";

function FlightList(){

    const {flights} = useOutletContext();
    
    const flightComponents = flights.map(flight => {
        return <Flight key={flight.id}/>
    })

    return (
        <ul>{flightComponents}</ul>
    );
}

export default FlightList;