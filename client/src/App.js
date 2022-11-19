import './App.css';
import ListView from './listPage/List';
import Loctab from './listPage/Loctab'
import './listPage/ListPageStyle.css'

function App() {
  return (
    <div class='list_page_wrapper'>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div style={{width: '20%'}}></div>
        {/* TODO: fix backgroundColor, style w/ transparency etc. */}
        <div>
          <div style={{padding: '15px'}}>
            <Loctab />
          </div>

          <div class='list_view_wrapper'>
            <ListView/>
          </div>
          
        </div>
        <div style={{width: '20%'}}></div>
      </div>      
    </div>
  );
}

export default App;
