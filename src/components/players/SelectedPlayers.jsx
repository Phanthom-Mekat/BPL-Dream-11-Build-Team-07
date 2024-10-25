import PropTypes from 'prop-types';
const SelectedPlayers = ({players}) => {
    console.log(players)
    return (
        <div>
            <h1>Selected Players(0/6)</h1>
            <section className='mt-10'>
                {
                    players.map(player =>(
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
    players: PropTypes.array
}
export default SelectedPlayers;