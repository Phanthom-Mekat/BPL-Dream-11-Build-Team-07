import { useState } from 'react'
import './App.css'
import Navbar from './components/Header/Navbar'
import Players from './components/players/Players'

function App() {

  const [coins, setCoin] = useState(0)
  const addCoin = () => {
    setCoin(coins + 600000)
  }

  const choosePlayer = (price) => {
      if(coins >= price){
        setCoin(coins - price)
      }
  }
  
  const [playerChosen, setPlayerChosen] = useState([])

  const chosenPlayerHandler = (player) => {
    if (playerChosen.length >= 6) {
      alert("You can only choose up to 6 players!");
    } else if (playerChosen.includes(player)) {
      alert(`${player.name} is already chosen!`);
    } else if (coins < player.biddingPrice) {
      alert("Not enough coins to choose this player!");
    } else {
      setPlayerChosen([...playerChosen, player]);
    }
  };
  

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
        <Players playerChosen={playerChosen} chosenPlayerHandler={chosenPlayerHandler} choosePlayer={choosePlayer} handleIsActive={handleIsActive} isActive={isActive}/>
    </>
  )
}

export default App
