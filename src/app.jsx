import { useState } from 'react'
import './App.css'

import SchedulePage from './components/Schedule/SchedulePage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SchedulePage />
    </>
  )
}

export default App
