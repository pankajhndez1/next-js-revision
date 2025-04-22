import React from 'react'

const CompB = ({count,handleCount}) => {

  return (
    <div>
      <div>count val is :{count}</div>
      <button onClick={handleCount}>Inc Count</button>
    </div>
  )
}

export default CompB