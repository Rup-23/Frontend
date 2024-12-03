import React from 'react'
import { memo } from 'react';


const Navbar = ({adjective,getAdjective}) => {
    console.log("Navbar is randered");
  return (
    <div>
      I'm a {adjective} Navbar
      <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)
