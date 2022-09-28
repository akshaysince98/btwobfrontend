import React from 'react'
import './sidebar.css'
import b2blogo from './logo/b2blogo.jpeg'

function Sidebar() {
  return (
    <>
      <div className="logotext">
        <img className="logo" src={b2blogo} />
        <div className="text">B2Brain</div>
      </div>
    </>
  )
}

export default Sidebar

