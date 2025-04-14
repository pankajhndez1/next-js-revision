import React from 'react'

const CompB = ({count,handleCount}) => {
  console.log('I am Comp BBBBB')
  return (
    <div>
      <div>count val is :{count}</div>
      <button onClick={handleCount}>Inc Count</button>
    </div>
  )
}

export default CompB