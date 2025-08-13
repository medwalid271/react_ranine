import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accueil from './acc.jsx'
import Navbar from './components/navbar.jsx'
import Formulaire from './Form.jsx'
import Carte from './cart.jsx'
import App2 from './app2.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navbar /> */}
      {/* <Accueil /> */}
      {/* <Formulaire/> */}
      <App2/>

      <Carte/>

    </>
  )
}

export default App
