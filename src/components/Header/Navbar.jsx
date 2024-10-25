import logo from '../../assets/logo.png'
import coin from '../../assets/coin.png'
const Navbar = () => {

    return (
        <nav className='flex justify-between items-center mt-2'>
            <div>
                <img src={logo} alt="" />            
            </div>
            <div className='flex gap-10 items-center'>
                <p className='text-gray-500 '>Home</p>
                <p className='text-gray-500 '>Fixture</p>
                <p className='text-gray-500 '>Teams</p>
                <p className='text-gray-500 '>Schedules</p>
                <div className='flex gap-1 border p-2 rounded-md items-center  '>
                    <p className='font-semibold '>0 coin</p>
                    <img className='w-5 h-5' src={coin} alt="" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;