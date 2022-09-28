import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Herobox from './components/Herobox';
import Searchbox from './components/Searchbox';
import Sidebar from './components/Sidebar';

function App() {

  const [hero, setHero] = useState('image')
  const [data, setData] = useState([])

  const imageherochange = (str) => {
    if (str == 'input') {
      setHero('data')
      return
    }
    hero == 'image' ? setHero('data') : setHero('image')
  }

  useEffect(() => {
    (async () => {
      const apiresponse = await axios.get("https://staging.staging.b2brain.com/search/autocomplete_org_all/?q=");
      setData(apiresponse.data)
    })()
  }, [])



  const apisearch = async (search) => {
    const apiresponse = await axios.get("https://staging.staging.b2brain.com/search/autocomplete_org_all/?q=" + search);

    setData(apiresponse.data)
  }


  return (
    <>
      <div className='sidesearchherobox'>
        <div className='side'>
          <Sidebar />
        </div>
        <div className='searchherobox'>
          <div className='search'>
            <Searchbox imageherochange={imageherochange} apisearch={apisearch} />
          </div>
          <div className='hero'>
            <Herobox hero={hero} data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
