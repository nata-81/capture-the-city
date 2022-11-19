import React, { useState } from 'react';

function Loctab() {
    let coordDecimalPlaces = 7;
    const [location, setLocation] = useState(getLocation());
    
    function getLocation() {
        if (navigator.geolocation) navigator.geolocation.getCurrentPosition(showPosition);
        else setLocation('Change a browser');
    }
      
    function showPosition(position) {
        setLocation(Number(position.coords.latitude).toFixed(coordDecimalPlaces) + ", " + Number(position.coords.longitude).toFixed(7));
    }
    
    return(
    <div>
        <div style={{display: 'flex', flexDirection: ''}}>
            <div style={{border: '1px solid black', borderRadius: '15px', display: 'flex', justifyContent: 'center'}}>
                <p>{location}</p>
            </div>
        </div>
        
    </div>);
}

export default Loctab;