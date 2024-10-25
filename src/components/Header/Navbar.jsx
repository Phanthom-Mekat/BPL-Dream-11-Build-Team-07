import logo from '../../assets/logo.png'
import coin from '../../assets/coin.png'
import banner from '../../assets/banner-main.png'
import PropTypes from 'prop-types';
import './navbar.css'

const Navbar = ({coins, addCoin}) => {
    
    return (
        <header className='w-11/12 mx-auto'>

        <nav className='flex justify-between items-center mt-2'>
            <div>
                <img src={logo} alt="" />            
            </div>
            <div className='md:flex gap-10 items-center'>
                <p className='text-gray-500 hidden md:block '>Home</p>
                <p className='text-gray-500 hidden md:block  '>Fixture</p>
                <p className='text-gray-500 hidden md:block '>Teams</p>
                <p className='text-gray-500 hidden md:block '>Schedules</p>
                <div className='flex gap-1 border p-2 rounded-md items-center  '>
                    <p className='font-semibold '>{coins} coin</p>
                    <img className='w-5 h-5' src={coin} alt="" />
                </div>
            </div>
        </nav>

        <section className='mt-4'>

        <div className="hero h-[85vh]   rounded-xl overflow-hidden custom-gradient2"
           >
            <div className="hero-overlay  bg-opacity-50"></div>
            <div className="hero-content text-white text-center">
              <div className=" flex flex-col space-y-6 items-center justify-center">
                <img className='' src={banner} alt="" />
                <h1 className="mb-5 text-2xl md:text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="mb-5 text-gray-300 font-semibold text-xl ">
                Beyond Boundaries Beyond Limits
                </p>
                <span className='border border-[#E7FE29] p-1 rounded-xl '>

                <button onClick={addCoin} className="btn bg-[#E7FE29]">Claim Free Credit</button>
                
                </span>
              </div>
            </div>
          </div>

        </section>

        </header>
        
    );


};

Navbar.propTypes = {
  addCoin: PropTypes.func.isRequired,
  coins: PropTypes.number.isRequired
};

export default Navbar;