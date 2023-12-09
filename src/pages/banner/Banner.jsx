import img from '../../assets/img/student.avif'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Banner = () => {
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])
    return (
        <div>
            <div data-aos='fade-down' className="hero min-h-screen bg-[#FAF0E6] text-[#063B29]">
                <div className="hero-content flex-col gap-10 lg:flex-row">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Welcome to Our Online Education School</h1>
                        <p className="py-6">Education is the process of acquiring knowledge, skills, values, and understanding through various methods, such as teaching, training, or research. It is a lifelong journey that empowers individuals to grow intellectually, socially, and emotionally. Education can take place in formal settings like schools and universities, as well as informal settings such as self-directed learning or community-based activities.</p>
                        <button className="btn bg-[#063B29] text-white">See more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;