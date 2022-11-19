import logo from './logo.svg';
import './App.css';
import ListView from './listPage/List';

function App() {
  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div style={{width: '20%'}}></div>
        {/* TODO: fix backgroundColor, style w/ transparency etc. */}
        <div style={{borderRadius: '20px', border: '2px solid Black', backgroundColor: '#B0B0FF', padding: '15px'}}>
          <ListView/>
        </div>
        <div style={{width: '20%'}}></div>
      </div>
    </div>
  );
}

export default App;
