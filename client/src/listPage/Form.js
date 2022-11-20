import { useState, useEffect } from "react";

const Form = (props) => {

    const [title, setTitle] = useState('')
    const [cont, setCont] = useState('')
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');

    useEffect(() => {
        postUploads();
    }, [])

    let postUploads = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
          let lat = position.coords.latitude;
          let long = position.coords.longitude;
      
          setLat(lat.toFixed(16));
          setLong(long.toFixed(16));
      });
    
      const rawResponse = await fetch('https://127.0.0.1/upload/create/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: title, body: cont, longitude: long, latitude: lat})
      });
      const content = await rawResponse.json();
    };

    function updateTitle(evt) {
      const val = evt.target.value;
      setTitle(val);
      console.log(title)
    }

    function updateCont(evt) {
      const val = evt.target.value;
      setCont(val);
    }
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>

        <input class="input_field" type="text" onChange={evt => updateTitle(evt)} placeholder="What's Happening?" style={{ borderTop: 'None', borderRight: 'None', borderLeft: 'None', fontSize: '30px' }}></input>
        <div style={{ height: '20px' }}></div>
        
        <textarea class="input_field" onChange={evt => updateCont(evt)} placeholder="Describe more ..." style={{ borderTop: 'None', borderRight: 'None', borderLeft: 'None', fontSize: '20px' }}></textarea>
        <div style={{ height: '20px' }}></div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <button class='submit_button' onClick={() => postUploads}>Submit</button>
          <input class = "input_field" type="text" placeholder="Send as Anonymous" style={{ borderTop: 'None', borderRight: 'None', borderLeft: 'None', fontSize: '14px' }}></input>
        </div>
        <div style={{ height: '20px' }}></div>
      </div>
    );
}

export default Form;