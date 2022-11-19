import './App.css';
import ListView from './listPage/List';
import Loctab from './listPage/Loctab'
import Form from './listPage/Form';
import Popup from './Popup';
import './listPage/ListPageStyle.css'
import { useState } from 'react';

function App() {
  const [ buttonPopup, setButtonPopup ] = useState(false);
  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');
  const [ longitude, setLongitude ] = useState('');
  const [ latitude, setLatitude ] = useState('');
  
  return (
    <div class='list_page_wrapper'>
      <Popup trigger={ buttonPopup } setTrigger={ setButtonPopup } title={title} content={content}/>
      <div class="list_flexbox" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div style={{width: '20%'}}></div>
        {/* TODO: fix backgroundColor, style w/ transparency etc. */}
        <div>
          <div style={{padding: '15px'}}>
            <Loctab setLongitude={setLongitude} setLatitude={setLatitude}/>
          </div>

          <div style={{padding: '15px', position: 'sticky', top: '0'}}>
            <Form />
          </div>

          <div class='list_view_wrapper'>
            <ListView setTrigger={setButtonPopup} setTitle={setTitle} setContent={setContent} longitude={longitude} latitude={latitude}/>
          </div>
          
        </div>
        <div style={{width: '20%'}}></div>
      </div>      
    </div>
  );
}

export default App;
