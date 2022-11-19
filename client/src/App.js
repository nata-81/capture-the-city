import './App.css';
import ListView from './listPage/List';
import Loctab from './listPage/Loctab'
import Form from './listPage/Form';
import Popup from './Popup';
import './listPage/ListPageStyle.css'
import { useState } from 'react';

function App() {
  const [ buttonPopup, setButtonPopup ] = useState(false);
  
  return (
    <div class='list_page_wrapper'>
      <Popup trigger={ buttonPopup } setTrigger={ setButtonPopup } />
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div style={{width: '20%'}}></div>
        {/* TODO: fix backgroundColor, style w/ transparency etc. */}
        <div>
          <div style={{padding: '15px'}}>
            <Loctab />
          </div>

          <div style={{padding: '15px', position: 'sticky', top: '0'}}>
            <Form />
          </div>

          <div class='list_view_wrapper'>
            <ListView setTrigger={setButtonPopup}/>
          </div>
          
        </div>
        <div style={{width: '20%'}}></div>
      </div>      
    </div>
  );
}

export default App;
