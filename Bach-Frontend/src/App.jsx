import { useState } from 'react'
import LoginPage from './Components/Login'
import './App.css'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <LoginPage />
  )
}

export default App
