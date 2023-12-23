import React from 'react'
import '../styles/Card.css'

function Card({id,name,image}) {
  return (
    <div className='Card'>
        <img src = {image}/>
        <br/>
        <span>도감 번호 :{id}</span>
        <br/>
        <span>이름 : {name}</span>
    </div>
  )
}

export default Card