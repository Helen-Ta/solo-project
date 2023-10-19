import React from 'react';
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';
import '../styles.css';
import 'dotenv/config.js';
// require('dotenv').config();
// import process from 'process';

const center = { lat: 48.8584, lng: 2.2945 };

function App () {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })
    // const isLoaded = true;

    if (!isLoaded) {
        return (
            <h1>Loading...</h1>
        )
    }

return (
    <div className='box'>
        <label htmlFor='destination'>Destination:</label>
        <input id='destination' type='text'></input>
        <button>Enter</button>
        <label htmlFor='thingsToDo'>Things To Do:</label>
        <input id='thingsToDo' type='text'></input>
        <button>Enter</button>
        <GoogleMap zoom={15} center={center} mapContainerClassName="map-container"></GoogleMap>
    </div>
)

}

export default App;