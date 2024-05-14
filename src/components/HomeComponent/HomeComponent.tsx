import React from 'react'
import {Image} from 'semantic-ui-react'
import './HomeComponent.scss'

export const HomeComponent = () => {
  return (
    <>
    <div className='home-section'>
      <Image src='cleanmycar.png'/>
      <h1 className='home-text'>
      Strike first, Strike hard, No mercy!...
      </h1>
    </div>
    </>
  )
}
