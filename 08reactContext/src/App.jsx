import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Login, Profile } from './Components'
import UserContextProvider from './Context/UserContextProvider'


function App() {
  return (
    <UserContextProvider>
      <h1>Hello</h1>
      <Login/>
      <Profile/>

    </UserContextProvider>
  )
}

export default App
