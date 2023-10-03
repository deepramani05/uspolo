import React, { useState } from 'react'
import Signup from './Signup'
import Login from './Login'

const Toggle = () => {

    let [toggle,setToggle] = useState(true)

  return (
    <div>
        {toggle ? <Login/> : <Signup/> }
        <h1 onClick={() => setToggle(!toggle)}>toggle</h1>
    </div>
  )
}

export default Toggle