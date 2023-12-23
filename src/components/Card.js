import React from 'react'
import '../styles/Card.css'

function Card({id,name,image,type}) {
  return (
    <div className='Card'>
        <img src = {image} alt={name}/>
        <br/>
        <span>도감 번호 : {id}</span>
        <br/>
        <span>이름 : {name}</span>
        <br/>
        <span>속성 : 
        {type.map((data)=> <>{` ${data.type.name} `}</>)}
        </span>
    </div>
  )
}

export default Card