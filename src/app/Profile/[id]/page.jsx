import React from 'react'

const page = ({params}) => {
    console.log(params.id);
  return (
    <div>User {params.id }</div>
  )
}

export default page