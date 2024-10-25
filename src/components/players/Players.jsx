import { useEffect, useState } from "react";
import Player from "./Player";
import PropTypes from "prop-types";
import SelectedPlayers from "./SelectedPlayers";
const Players = ({handleIsActive, isActive,choosePlayer,playerChosen,chosenPlayerHandler,deletePlayer}) => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('players.json')
        .then(res => res.json())
        .then(data =>setPlayers(data))
    },[])

    return (
        <main className="w-11/12 mx-auto mt-20">
            <section>
                <div className="flex justify-between items-center">
                    <div></div>
                    <div className="border rounded-2xl mb-2">
                        <button 
                        onClick={() => handleIsActive('available')}
                        className={`${isActive.available ? 'btn btn-ghost bg-[#E7FE29] ' : 'btn btn-ghost'}`}>Available</button>
                        <button
                        onClick={() => handleIsActive('selected')} className={`${isActive.available ? 'btn btn-ghost  ' : 'btn btn-ghost bg-[#E7FE29]'}`}>Selected {playerChosen.length}/6</button>
                    </div>
                </div>
            </section>

        <section>
            {isActive.available?<Player choosePlayer={choosePlayer} chosenPlayerHandler={chosenPlayerHandler} players={players} />:<SelectedPlayers players={players} playerChosen={playerChosen} deletePlayer={deletePlayer} handleIsActive={handleIsActive}  />}
        </section>
        
        </main>
    );
};

Players.propTypes = {
    handleIsActive: PropTypes.func,
    isActive: PropTypes.object,
    choosePlayer: PropTypes.func,
    playerChosen: PropTypes.array,
    chosenPlayerHandler: PropTypes.func,
    deletePlayer: PropTypes.func
}

export default Players; 