import './App.css';
import ListView from './listPage/List';
import Loctab from './listPage/Loctab'

function App() {
  return (
    <div style={ {backgroundImage: `url("https://us.123rf.com/450wm/madorf/madorf1606/madorf160600021/59327931-nahtlose-bayerische-flagge-hintergrund.jpg?ver=6")`}}>
      <div>
        
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div style={{width: '20%'}}></div>
        {/* TODO: fix backgroundColor, style w/ transparency etc. */}
        <div>
          <div style={{borderRadius: '20px', border: '2px solid Black', backgroundColor: '#B0B0FF', padding: '15px'}}>
            <Loctab />
          </div>

          <div style={{borderRadius: '20px', border: '2px solid Black', backgroundColor: '#B0B0FF', padding: '15px'}}>
            <ListView/>
          </div>
          
        </div>
        <div style={{width: '20%'}}></div>
      </div>      
    </div>
  );
}

export default App;
