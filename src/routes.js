import App from "./components/App";
import FlightList from "./components/FlightList";
import NewFlightForm from "./components/NewFlightForm";
import About from "./components/About";

const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <FlightList/>
            },
            {
                path: "/add_flight",
                element: <NewFlightForm/>
            },
            {
                path: "/about",
                element: <About/>
            }
        ]
    }
];

export default routes;