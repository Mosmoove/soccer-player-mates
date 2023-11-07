import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="side-nav">
     </div>
     <div className="home-page">
      <h1>Welcome to the Soccer-mate Creator!</h1>
      <h3>Here is where you can create your own set of soccer players, or soccer-mates, before they step into the pitch!</h3>
      <img src = "/images/players.jpeg" className='welcome-images' alt ="soccer players"></img>
      <br />
      <img src = "/images/players2.jpeg" className='welcome-images' alt = "soccer players"></img>
     </div>



    </>
  )
}

export default App
