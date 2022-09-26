import './App.css';
import Herobox from './components/Herobox';
import Searchbox from './components/Searchbox';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <div className='sidesearchherobox'>
        <div className='side'>
          <Sidebar />
        </div>
        <div className='searchherobox'>
          <div className='search'>
            <Searchbox />
          </div>
          <div className='hero'>
          <Herobox />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
