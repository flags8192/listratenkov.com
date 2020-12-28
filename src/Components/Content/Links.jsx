import React from 'react'
import {myData} from '../../Data/Data'
import {ScrollTo} from "../ScrollTo/ScrollTo";

export const Links = () => {
  return (
    <>
      <div className="icons-link">
        {myData.links.map((link, key) => {
          return (
            <a key={key} target="_blank" rel="noreferrer nopener" href={link.url}><i className={link.icon}/></a>
          );
        })}
      </div>
      <ScrollTo to="aboutUs"/>
    </>
  )
}

