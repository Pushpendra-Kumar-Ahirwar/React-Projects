import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid}=useParams()
  return (
    <div className='text-3xl bg-orange-700 text-wrap p-4 rounded'>User: {userid}</div>
  )
}

export default User