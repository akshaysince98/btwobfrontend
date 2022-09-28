import React, { useState } from 'react'
import './searchbox.css'

function Searchbox(props) {
  const [seaClo, setSeaClo] = useState('search')

  const searchClose = () => {
    seaClo == 'search' ? setSeaClo('close') : setSeaClo('search')
    props.imageherochange()
  }

  const searchclosebox = () => {
    setSeaClo('close')
    props.imageherochange('input')

  }

  const searching = (e) => {
    props.apisearch(e.target.value)
  }

  return (
    <>
      <div className='searchboxdiv' >
        <div onClick={searchClose} className='searchlogo'>{seaClo}</div>
        <input onBlur={(e) => e.target.value = ''} onChange={searching} onClick={searchclosebox} className='searchbox' type="text" placeholder='Search by account name or website' />
      </div>
    </>
  )
}

export default Searchbox