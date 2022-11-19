import { useState, useEffect } from "react";

const Form = () => {

    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');

    useEffect(() => {
        postUploads();
    }, [])

    let postUploads = async () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
        
            setLat(lat.toFixed(7));
            setLong(long.toFixed(7));
        });
    
        const rawResponse = await fetch('https://127.0.0.1/upload/create/', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({title: 'tmp', body: 'Textual content', longitude: long, latitude: lat})
        });
        const content = await rawResponse.json();
        console.log(content);
      };
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input type="text" placeholder="What's Happening?" style={{ backgroundColor: 'transparent', borderTop: 'None', borderRight: 'None', borderLeft: 'None', fontSize: '30px' }}></input>
            <div style={{ height: '20px' }}></div>
            <input type="text" placeholder="Describe more ..." style={{ backgroundColor: 'transparent', borderTop: 'None', borderRight: 'None', borderLeft: 'None', fontSize: '20px' }}></input>
            <div style={{ height: '20px' }}></div>
            <button onClick={() => postUploads()}>Submit</button>
            <div style={{ height: '20px' }}></div>
        </div>
    );
}

export default Form;