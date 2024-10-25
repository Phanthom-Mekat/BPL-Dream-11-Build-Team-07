import { useState } from 'react'
import './App.css'
import Navbar from './components/Header/Navbar'
import Players from './components/players/Players'

function App() {

  const [coins, setCoin] = useState(0)

  const addCoin = () => {
    setCoin(coins + 600000)
  }

  return (
    <>
        <Navbar coins={coins} addCoin={addCoin} />
        <Players/>
    </>
  )
}

export default App
