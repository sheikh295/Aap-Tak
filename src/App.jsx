import { useState } from 'react'
import './App.css'
import Navbar from './Components/Header/Navbar'
import News from './Components/Body/News'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <News />
    </>
  )
}

export default App
