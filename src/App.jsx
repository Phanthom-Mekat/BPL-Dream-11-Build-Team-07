import { useState } from 'react'
import './App.css'
import Navbar from './components/Header/Navbar'
import Players from './components/players/Players'

function App() {

  const [coins, setCoin] = useState(0)
  const addCoin = () => {
    setCoin(coins + 600000)
  }

  const [isActive, setIsActive] = useState({available: true, status: "available"});
  const handleIsActive = (status) => {
    if(status === 'available'){
      setIsActive({available: true, status: "available"})
    }
    if(status === 'selected'){
      setIsActive({available: false, status: "selected"})
    }
  }
  console.log(isActive)
  return (
    <>
        <Navbar coins={coins} addCoin={addCoin} />
        <Players handleIsActive={handleIsActive} isActive={isActive}/>
    </>
  )
}

export default App
