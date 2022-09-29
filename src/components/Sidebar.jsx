import React, { useState } from 'react'
import './sidebar.css'
import b2blogo from './logo/b2blogo.jpeg'

function Sidebar() {

  const [accountsdrop, setAccountsdrop] = useState(true)
  const [preferdrop, setPreferdrop] = useState(true)

  const hideunhideaccounts = () => {
    if (accountsdrop) {
      setAccountsdrop(false)
      return
    } else {
      setAccountsdrop(true)
    }
  }
  const hideunhideprefer = () => {
    if (preferdrop) {
      setPreferdrop(false)
      return
    } else {
      setPreferdrop(true)
    }
  }

  return (
    <>
      <div className="logotext">
        <img className="logo" src={b2blogo} alt='' />
        <div className="text">B2Brain</div>
      </div>

      <div className="sidebarlist">
        <div className='listitem'>
          <span className="material-icons">home</span>
          <span className="sidebartext">Dashboard</span>
        </div>
        <div className='listitem'>
          <span className="material-icons">star</span>
          <span className="sidebartext">Intels</span>
        </div>
        <div className='listitem'>
          <span className="material-icons">person</span>
          <span className="sidebartext">Leads</span>
        </div>
        {
          accountsdrop ? <>
            <div className='dropitem' onClick={hideunhideaccounts}>
              <div className="dropitemhead">
                <span className="material-icons">business</span>
                <span className="sidebartext">Accounts</span>
              </div>
              <span class="material-icons" >keyboard_arrow_up</span>
            </div>
          </> :
            <>
              <div className='dropitem' onClick={hideunhideaccounts}>
                <div className="dropitemhead">
                  <span className="material-icons">business</span>
                  <span className="sidebartext">Accounts</span>
                </div>
                <span class="material-icons" >keyboard_arrow_down</span>
              </div>
              <div className="droptext">
                <div>Manage all</div>
                <div>Track new accounts</div>
                <div>Bulk Imports</div>
              </div>
            </>
        }
        {
          preferdrop ? <>
            <div className='dropitem' onClick={hideunhideprefer}>
              <div className="dropitemhead">
                <span className="material-icons">settings</span>
                <span className="sidebartext">Preferences</span>
              </div>
              <span class="material-icons" >keyboard_arrow_up</span>
            </div>
          </> :
            <>
              <div className='dropitem' onClick={hideunhideprefer}>
                <div className="dropitemhead">
                  <span className="material-icons">settings</span>
                  <span className="sidebartext">Preferences</span>
                </div>
                <span class="material-icons" >keyboard_arrow_down</span>
              </div>
              <div className="droptext">
                <div>Product Focus</div>
                <div>Intel Preferences</div>
                <div>Lead Persona</div>
              </div>
            </>
        }
        <div className='listitem'>
          <span className="material-icons">link</span>
          <span className="sidebartext">Integrations</span>
        </div>
        <div className='listitem'>
          <span className="material-icons">groups</span>
          <span className="sidebartext">Team</span>
        </div>
        <div className='listitem'>
          <span className="material-icons">question_answer</span>
          <span className="sidebartext">Help/Support</span>
        </div>

      </div>

    </>
  )
}

export default Sidebar

