import React, { useState } from 'react'
import './searchbox.css'

function Searchbox() {
  const [seaClo, setSeaClo] = useState('search')

  const searchClose = () => {
    seaClo == 'search' ? setSeaClo('close') : setSeaClo('search')
  }

  const searchclosebox = () => {
    setSeaClo('close')
  }

  const searching = (e) => {
    
  }

  return (
    <>
      <div className='searchboxdiv' >
        <div onClick={searchClose} className='searchlogo'>{seaClo}</div>
        <input onClick={searchclosebox} className='searchbox' type="text" placeholder='Search by account name or website' />
      </div>
    </>
  )
}

export default Searchbox