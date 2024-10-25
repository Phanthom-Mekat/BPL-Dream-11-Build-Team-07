import PropTypes from 'prop-types';
const SelectedPlayers = ({playerChosen}) => {
    console.log(playerChosen)
    return (
        <div>
        <h1>Selected Players({playerChosen.length}/6)</h1>
            <section className='mt-10'>
                {
                    playerChosen.map(player =>(
                        <div key={player.playerId} className='flex justify-between border p-5 rounded-lg'>
                        <div className='flex gap-12 items-center'>
                        <img className='w-20 rounded-xl' src={player.image} alt="" />
                            <div>
                                <h2 className='font-semibold'>{player.name}</h2>
                                <h3 className='text-gray-500'>{player.role}</h3>
                            </div>
                        </div>
                        <button>delete</button>
                    </div>
                    ))
                }
                
            </section>
        </div>
    );
};
SelectedPlayers.propTypes = {
    playerChosen: PropTypes.array
}
export default SelectedPlayers;