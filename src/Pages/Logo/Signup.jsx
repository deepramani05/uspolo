import React from 'react'
import { useState } from 'react'

const Signup = () => {
    let [Name,setName] = useState("")
    let [Email,setEmail] = useState("")
    let [Password,setPassword] = useState("")
  
    const handleform = (e) => {
        e.preventDefault()

        let data = {
            name :Name,
            email :Email,
            password :Password
        }

    } 

  
    return (
      <div>
        <form onSubmit={handleform}>
          <input type="text" placeholder='Enter your Name' required onChange={(e)=>setName(e.target.value)} />
          <input type="email" placeholder='Enter your E-mail ID' required onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder='Enter your Password' required onChange={(e)=>setPassword(e.target.value)} />
          <input type="submit" />
        </form>
        {/* <Toggle/> */}
      </div>
    )
}

export default Signup