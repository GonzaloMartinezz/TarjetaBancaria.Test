import { useState } from 'react'
import './App.css'
import HomePage from './Components/HomePage'
import LogIn from './Components/LogIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HomePage />
    <LogIn />
    </>
  )
}

export default App
