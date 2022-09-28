import React from 'react'
import image1 from './images/image1.jpeg'
import image2 from './images/image2.jpeg'
import image3 from './images/image3.jpeg'
import Organisations from './Organisations'
import './herobox.css'

function Herobox(props) {

  return (
    <>
      {
        props.hero == 'image' ? <div className='images'>
          <img src={image1} alt=''></img>
          <img src={image2} alt=''></img>
          <img src={image3} alt=''></img>
        </div> :
        <>
          <div className='herosimilartext'>Similar accounts</div>
          <br />
          <div className='allcompanies'>
            {props.data.map((d, i) => <Organisations key={i} data={d} />)}
          </div>
        </>
      }
    </>
  )
}

export default Herobox