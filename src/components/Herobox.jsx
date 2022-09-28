import React from 'react'
import image1 from './images/image1.jpeg'
import image2 from './images/image2.jpeg'
import image3 from './images/image3.jpeg'

function Herobox(props) {

  return (
    <>
      {props.hero == 'image' ? <div className='images'>
        <img src={image1} alt=''></img>
        <img src={image2} alt=''></img>
        <img src={image3} alt=''></img>
      </div> : <div></div>}
    </>
  )
}

export default Herobox