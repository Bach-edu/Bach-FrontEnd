import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-600 min-h-dvh'>
      <h1 className='flex justify-center min-w-dvw font-semibold text-2xl p-4'>Bach Musical</h1>
    </div>
  )
}

export default App
