import './newslatter.css'
const Newslatter = () => {
    return (
        <div>
            <section className="bg-base-200 text-base-content p-16 mt-20 w-11/12 mx-auto rounded-lg custom-gradient relative -bottom-14 z-10 ">
                <form className="flex flex-col items-center text-center">
                    <h6 className="text-3xl font-bold">Subscribe to our Newsletter</h6>
                    <p className="py-2 text-gray-500">Get the latest updates and news right in your inbox!</p>
                    <fieldset className="w-full">
                    <div className="join">
                        <input
                        type="text"
                        placeholder="Enter your email address"
                        className="input input-bordered join-item" required />
                        <button className='px-6 py-2 text-white rounded-r-md bg-gradient-to-r from-[#fed8b1] to-[#fda65d]'>Subscribe</button>
                    </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default Newslatter;