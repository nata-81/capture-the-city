import React, { useState } from 'react';
import LocationArrowImg from './location-arrow-icon.png'

function Loctab(props) {
    let coordDecimalPlaces = 7;
    const [location, setLocation] = useState(getLocation());
    
    function getLocation() {
        if (navigator.geolocation) navigator.geolocation.getCurrentPosition(showPosition);
        else setLocation('Change a browser');
    }
      
    function showPosition(position) {
        setLocation(Number(position.coords.latitude).toFixed(coordDecimalPlaces) + ", " + Number(position.coords.longitude).toFixed(7));
        props.setLatitude(Number(position.coords.latitude).toFixed(coordDecimalPlaces));
        props.setLongitude(Number(position.coords.longitude).toFixed(coordDecimalPlaces));
    }
    
    return(
    <div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <img src={LocationArrowImg} width='30px' height='30px' style={{marginTop: '16px', marginRight: '5px'}}></img>
                <h3 class='location_coords' style={{textAlign: 'center'}}>{location}</h3>
        </div>
        
    </div>);
}

export default Loctab;