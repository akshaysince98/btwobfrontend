import React, { useState } from 'react'
import './organisation.css'

function Organisations(props) {
  const [trackstate, setTrackstate] = useState('trackinactive')


  const tracking = () => {
    if (trackstate == "trackinactive") {
      setTrackstate('trackloading')

      setTimeout(() => {
        setTrackstate('trackactive')
      }, 1000);
      const date = new Date()
      console.log(props.data.company + " " + props.data.slug + " tracked at " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " on " + date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear())
      return
    }

    if (trackstate == 'trackactive') {
      setTrackstate('trackinactive')
      console.log("Tracking stopped for " + props.data.company)
      return
    }

  }
  // console.log(props.data)

  return (
    <>
      {
        // the logo request is returning 403 forbidden error 
        // <img src={props.data.logo} alt="" className="logo" /> 
        props.data ?
          <>
            <div className="fullbox">

              <div className='companybox'>

                {/* TODO: companylogo background color from data object */}
                <div className="companylogo">{props.data.company[0]}</div>
                <div className="companydetails">
                  <div className="companyname">{props.data.company}</div>
                  <div className="companywebsite">{props.data.website}</div>
                </div>
              </div>
              {
                trackstate == 'trackactive' ?
                  <div onClick={tracking} className="trackactive">Tracking</div> :
                  trackstate == 'trackloading' ?
                    <div className="trackloading"> <span className='material-icons'> hourglass_full</span> Track</div> :
                    <div onClick={tracking} className="trackinactive">Track</div>
              }

            </div>
          </>
          : <div></div>}
    </>
  )
}

export default Organisations
