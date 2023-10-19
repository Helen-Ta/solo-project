import React from 'react';
import { useJsApiLoader, GoogleMap, Marker, Autocomplete } from '@react-google-maps/api';
import '../styles.css';

const center = { lat: 48.8584, lng: 2.2945 };

function App () {

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyCgqte3pmhS87I27h9ulTNycltibV3W7AE",
        libraries: ['places'],
    })

    if (!isLoaded) {
        return (
            <h1>Loading...</h1>
        )
    }

return (
    <div className='box'>
        <div className='destination'>
            <label htmlFor='destination'>Destination:</label>
            <Autocomplete>
                <input id='destination' type='text'></input>
            </Autocomplete>
            <button>Enter</button>
        </div>

        <label htmlFor='thingsToDo'>Things To Do:</label>
        <input id='thingsToDo' type='text'></input>
        <button>Enter</button>

        <GoogleMap 
            zoom={15}
            center={center}
            mapContainerClassName="map-container">
            <Marker position={center}></Marker>   
        </GoogleMap>
    </div>
)

}

export default App;