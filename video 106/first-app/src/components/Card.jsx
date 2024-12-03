import React from 'react'
import "./Card.css" 
const Card = (props) => {
  return (
    <div className='card' style={{overflow:"hidden"}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsn-Z_8W4SgYInbPjbVGcY3sGWMK9BMnipr18AIGbL1g&s" alt="coding_img" width={340} style={{border:"2px solid red"}}/>
      <h1>{props.title} </h1>
      <p>{props.description}</p>    
    </div>
  )
}

export default Card
