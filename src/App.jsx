import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accueil from './acc.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Accueil />
  )
}

export default App
