import React from 'react'
import { useNavigate } from 'react-router-dom'

const Basic = () => {
    const navigate = useNavigate()
  return (
    <>
    <h1>Hello world!</h1>
    <button onClick={()=>navigate('dashboard')}>dashboard</button>
    </>
  )
}

export default Basic




