import { useState } from 'react'
import './App.css'
import Navbar from './components/Header/Navbar'
import Players from './components/players/Players'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Newslatter from './components/newslatter/Newslatter';
function App() {

  const [coins, setCoin] = useState(0)
  const addCoin = () => {
    setCoin(coins + 600000)
    toast.success('600000 coins added', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  const choosePlayer = (price) => {
      if(coins >= price){
        setCoin(coins - price)
      }
  }
  
  const [playerChosen, setPlayerChosen] = useState([])

  const chosenPlayerHandler = (player) => {
    if (playerChosen.length >= 6) {
      toast.warn('Only 6 players can be selected', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",

        });
      
    } else if (playerChosen.includes(player)) {
      toast.error(`${player.name} is already chosen!`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",

        });
    } else if (coins < player.biddingPrice) {
      toast.error("Not enough coins", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    } else {
      setPlayerChosen([...playerChosen, player]);
      toast.success(`${player.name} has been selected`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  };

  const deletePlayer = (player) => {
    setPlayerChosen(playerChosen.filter((p) => p.playerId !== player.playerId));
    toast.error(`${player.name} has been removed`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
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
        <Players playerChosen={playerChosen} deletePlayer={deletePlayer} chosenPlayerHandler={chosenPlayerHandler} choosePlayer={choosePlayer} handleIsActive={handleIsActive} isActive={isActive}/>
        <Newslatter/>
        <ToastContainer />
    </>
  )
}

export default App
