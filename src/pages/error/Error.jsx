import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Error = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])
    return (
        <div>
            <div data-aos="fade-up" className="h-screen flex items-center justify-center">
                <div>
                    <h1 className="text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#03054B] to-[#523277]"><span className="text-9xl">O</span><span className="text-8xl">o</span>ps!</h1>
                    <p className="text-xl text-center mt-5 font-semibold font-serif">404-PAGE NOT FOUND</p>
                    <p className="text-center mt-3">The page you are looking for might have been removed <br /> had its name changed or is temprarily unavailable.</p>
                    <Link className="flex justify-center bg-green-300 w-2/4 mt-5 rounded p-3 text-purple-800 font-semibold mx-auto" to='/'>Back to home</Link>
                </div>
            </div>
        </div>
    );
};

export default Error;