import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const Privateroute = ({children}) => {

    let value = useSelector((store)=>store.reducer)

  return (
    value.user ? children : <Navigate to='/loginpage'></Navigate>
  )
}

export default Privateroute