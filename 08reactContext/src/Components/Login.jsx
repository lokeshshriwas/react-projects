import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")

   const {setUser} = useContext(UserContext)

    function handleSubmit(e){
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
        <input type="text" value={username} placeholder='username' onChange={(e)=> setUsername(e.target.value)} />
        <input type="password" value={password} placeholder='password' onChange={(e)=> setPassword(e.target.value)} />
        <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export  {Login}