import PropTypes from 'prop-types';
import { MdDeleteForever } from "react-icons/md";
const SelectedPlayers = ({playerChosen,deletePlayer,handleIsActive}) => {
    console.log(playerChosen)
    return (
        <div className=''>
        <h1 className='text-2xl font-semibold'>Selected Players({playerChosen.length}/6)</h1>
            <section className='mt-10 space-y-3'>
                {
                    playerChosen.map(player =>(
                        <div key={player.playerId} className='flex justify-between border p-5 rounded-lg'>
                        <div className='flex gap-12 items-center'>
                        <img className='w-16 h-16 rounded-xl' src={player.image} alt="" />
                            <div>
                                <h2 className='font-semibold'>{player.name}</h2>
                                <h3 className='text-gray-500'>{player.role}</h3>
                            </div>
                        </div>
                        <button onClick={() => deletePlayer(player)}
                        className='text-red-600 text-2xl'><MdDeleteForever /></button>
                    </div>
                    ))
                }
                
            </section>
            <button onClick={() => handleIsActive('available')}
             className='btn btn-ghost mt-10 bg-[#E7FE29]'>Add More Player</button>
        </div>
    );
};
SelectedPlayers.propTypes = {
    playerChosen: PropTypes.array,
    deletePlayer: PropTypes.func,
    handleIsActive: PropTypes.func
}
export default SelectedPlayers;