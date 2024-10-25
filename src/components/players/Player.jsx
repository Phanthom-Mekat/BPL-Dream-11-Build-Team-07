import { IoPerson } from "react-icons/io5";
import { FaFlag } from "react-icons/fa";
import PropTypes from "prop-types";
const Player = ({players,choosePlayer,chosenPlayerHandler}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 " >
        {
            players.map(player => 
                <div className="card bg-base-100  shadow-xl border" key={player.playerId}>
                    <figure className="px-3 pt-3">
                        <img
                        src={player.image}
                        alt="player image"
                        className="rounded-xl  w-full h-80 object-cover " />
                    </figure>
                    <div className="px-3 p-3 space-y-2">
                        <h2 className="card-title"><IoPerson />{player.name}</h2>
                        <div className="flex justify-between">
                            <h3 className="flex items-center text-xs gap-2 font-semibold text-gray-500"><FaFlag />{player.country}</h3>
                            <p className="p-1 rounded-md bg-[#1313130D]"><small>{player.role}</small></p>
                        </div>
                        <hr className="border" />
                        <h2 className="font-semibold">Rating  </h2>

                        <div className="flex justify-between">
                            <h3 className="flex text-xs items-center gap-2 font-medium ">{player.battingStyle}</h3>
                            <p className="text-gray-500"><small>{player.bowlingStyle}</small></p>
                        </div>

                        <div className="flex justify-between">
                            <h3 className="flex items-center text-xs gap-2 font-semibold">Price:${player.biddingPrice}</h3>
                            <button onClick={() => {choosePlayer(parseInt(player.biddingPrice));
                            chosenPlayerHandler(player);
                            }}
                            className="btn btn-sm">Choose Player</button>
                        </div>
                    </div>
                </div>
    
           )
        }
    </div>
    );
};
Player.propTypes = {
    players: PropTypes.array,
    choosePlayer: PropTypes.func,
    chosenPlayerHandler: PropTypes.func
}
export default Player;