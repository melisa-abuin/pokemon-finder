import React from 'react'

const Card = ({ name, image, types }) => {
  console.log(types)
  return (
    <div>
      <img src={image && image.front} />
      <h2>{name}</h2>
      {types && types.map((item, index) => 
        <div key={index}>{item.type.name}</div>
      )}
    </div>
  )
}

export default Card