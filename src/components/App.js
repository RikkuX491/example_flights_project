import '../App.css';

import NavBar from './NavBar';
import Header from './Header';

import { Outlet } from 'react-router-dom';

import { useState, useEffect } from 'react';

function App() {

  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/flights")
    .then(response => response.json())
    .then(flightsData => setFlights(flightsData))
  }, [])

  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Outlet context={
        {
          flights: flights
        }
      }/>
    </div>
  );
}

export default App;
