import React from 'react'
import {myData} from '../../Data/Data'

export const Background = () => {
  return (
    <video autoPlay muted loop id="video">
      <source src={myData.backgroundVideoUrl} type="video/mp4"/>
    </video>
  )
}
