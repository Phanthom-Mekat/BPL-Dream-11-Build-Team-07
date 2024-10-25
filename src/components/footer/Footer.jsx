import footerImage from '../../assets/logo-footer.png'
const Footer = () => {
    return (
        <footer>
            
            <section className=" w-full bg-black text-white p-16 absolute">
                <div className='flex justify-center'>
                    <img src={footerImage} alt="" />    
                </div>
                <div className="md:flex justify-between items-center space-y-5">
                <nav>
                    <h6 className="footer-title">About Us</h6>
                    <p>We are a passionate team dedicated <br /> to providing the best services to our customers.</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover ">Home</a>
                    <a className="link link-hover">Service</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <form>
                    <h6 className="footer-title">Subscribe</h6>
                    <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="">Subscribe to our newsletter <br /> for the latest updates.</span>
                    </label>
                    <div className="join">
                        <input
                        type="text"
                        placeholder="Enter your email"
                        className="w-32 md:w-full input input-bordered join-item" />
                        <button className='px-6 py-2 text-white rounded-r-md bg-gradient-to-r from-[#fed8b1] to-[#fda65d]'>Subscribe</button>
                    </div>
                    </fieldset>
                </form>
                </div>
            </section>

            
        </footer>
    );
};

export default Footer;