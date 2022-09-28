import { useState } from 'react';
import './App.css';
import Herobox from './components/Herobox';
import Searchbox from './components/Searchbox';
import Sidebar from './components/Sidebar';

function App() {

  const [hero, setHero] = useState('image')

  const imageherochange = (str) => {
    if (str == 'input') {
      setHero('data')
      return
    }
    hero == 'image' ? setHero('data') : setHero('image')
  }

  // const data = await axios.get("/user/logout");
  
  return (
    <>
      <div className='sidesearchherobox'>
        <div className='side'>
          <Sidebar />
        </div>
        <div className='searchherobox'>
          <div className='search'>
            <Searchbox imageherochange={imageherochange} />
          </div>
          <div className='hero'>
            <Herobox hero={hero} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
