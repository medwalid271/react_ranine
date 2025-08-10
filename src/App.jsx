import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accueil from './acc.jsx'
import Accueil from './form.jsx'
import Navbar from './components/navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Accueil />

    </>
  )
}

export default App
