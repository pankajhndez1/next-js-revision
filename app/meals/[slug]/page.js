import React from 'react'

const DynamicMeals = ({params}) => {
    // console.log(params.slug,'params.slug')
  return (
    <div>DynamicMeals {params.slug}</div>
  )
}

export default DynamicMeals