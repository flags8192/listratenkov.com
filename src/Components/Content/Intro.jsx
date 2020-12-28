import React from 'react'
import {myData} from '../../Data/Data'

export const Intro = () => {
  return (
    <>
      <div className="intro">
        Hello, I'm {myData.name}!
      </div>
      <div className="tagline">
        {myData.tagline}
      </div>
      <div className="subtagline">
        {myData.subtagline}
      </div>
    </>
  )
}

