import React, { useState } from 'react';

function Loctab() {
    const [location, setLocation] = useState(getLocation());
    
    function getLocation() {
        if (navigator.geolocation) navigator.geolocation.getCurrentPosition(showPosition);
        else setLocation('Change a browser');
    }
      
    function showPosition(position) {
        setLocation(position.coords.latitude + ", " + position.coords.longitude);
    }
    
    return(
    <div>
        <button onClick={() => setLocation(getLocation())}>Refresh</button>
        <br></br>
        <div style={{display: 'flex', flexDirection: ''}}>
            <div style={{border: '1px solid black', borderRadius: '25%', display: 'flex', justifyContent: 'center'}}>
                <p>{location}</p>
            </div>
        </div>
        
    </div>);
}

export default Loctab;