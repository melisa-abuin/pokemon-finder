import React, { useCallback, useState, useEffect } from 'react'
import useApi from './api'

const TypeRelationships = ({ types }) => {
  const [ { data }, setData ] = useApi(null)
  const [ relations, setRelations ] = useState("")

  const handleClick = useCallback( async types => {
    await setData(types[0].type.name)
    await setData(types[1].type.name)
  })

  useEffect(() => {
    data && setRelations(relations => [...relations, data]);
  }, [ data ]);

  console.log(relations)

  return (
    <>
    <button onClick={() => handleClick(types)}>show strengths and weakness</button>
    {data && <div><label>is weak against:</label></div>}
    </>
  )
}

export default TypeRelationships