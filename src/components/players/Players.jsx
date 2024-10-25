import { useEffect, useState } from "react";
import { IoPerson } from "react-icons/io5";
import { FaFlag } from "react-icons/fa";
const Players = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('players.json')
        .then(res => res.json())
        .then(data =>setPlayers(data))
    },[])
    console.log(players)
    return (
        <main className="w-11/12 mx-auto mt-20">
            <section>
                <div className="flex justify-between items-center">
                    <p className="text-2xl font-semibold">Available Players</p>
                    <div className="border rounded-2xl">
                        <button className="btn btn-ghost bg-[#E7FE29] ">Available</button>
                        <button className="btn btn-ghost">Selected</button>
                    </div>
                </div>
            </section>

        <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 " >
            {
                players.map(player => 
                    <div className="card bg-base-100 w-96 shadow-xl border" key={player.playerId}>
                        <figure className="px-3 pt-3">
                            <img
                            src={player.image}
                            alt="player image"
                            className="rounded-xl  w-full h-60 object-cover " />
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
                                <h3 className="flex items-center text-xs gap-2 font-semibold">Price:{player.biddingPrice}</h3>
                                <button className="btn btn-sm">Choose Player</button>
                            </div>
                        </div>
                    </div>
                    
               )
            }
        </div>
        </section>
        
        </main>
    );
};

export default Players;