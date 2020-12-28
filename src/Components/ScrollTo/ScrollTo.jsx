import React from 'react'
import {Link} from "react-scroll";

export const ScrollTo = (props) => {
  return (
    <div className="scroll">
      <Link to={props.to} spy={true} smooth={true}><span/></Link>
    </div>
  )
}

