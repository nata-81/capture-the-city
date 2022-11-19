import './App.css';
import ListView from './listPage/List';
import Loctab from './listPage/Loctab'
import Form from './listPage/Form';
import './listPage/ListPageStyle.css'
import { useState, useEffect } from 'react';

function App() {
  
  return (
    <div class='list_page_wrapper'>
      <div class='list_flexbox' style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
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
            <ListView />
          </div>
          
        </div>
        <div style={{width: '20%'}}></div>
      </div>      
    </div>
  );
}

export default App;
