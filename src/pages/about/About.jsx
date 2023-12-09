import logo1 from '../../assets/img/logo.jpg'
import logo2 from '../../assets/img/software.jpg'
import logo3 from '../../assets/img/support1.jpg'
import logo4 from '../../assets/img/supp3.avif'
import { AiOutlinePhone } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className="text-[#063B29] mt-10">
            <div className="text-center text-[#063B29] space-y-4">
                <h1 className="md:text-5xl text-2xl font-semibold">About Us</h1>
                <p>Welcome to <span className="font-bold">edutech</span>, where education meets inspiration. <br />
                    At <span className="font-bold">edutech</span>, our mission is to briefly describe your core educational goal or purpose, e.g.,<br />empower individuals of all backgrounds to pursue lifelong learning and achieve their full potential. <br />We envision a world where every person has access to quality education, regardless of <br />

                </p>

            </div>
            <div className="mt-10 md:-mb-20">
                <h1 className="text-2xl mt-20 mb-20 font-semibold text-center">What We Offer</h1>
                <div className='grid grid-cols-2 lg:grid-cols-4'>
                    <div className="border border-[#063B29] justify-center flex items-center w-52 h-52">
                        <div>
                            <img className='mx-auto' src={logo1} alt="" />
                            <h1 className="text-center font-semibold text-xl">Website Desing</h1>
                        </div>
                    </div>
                    <div className="border border-[#063B29] justify-center flex items-center w-52 h-52">
                        <div>
                            <img className='mx-auto w-40' src={logo2} alt="" />
                            <h1 className="text-center font-semibold text-xl">Programming</h1>
                        </div>
                    </div>
                    <div className="border border-[#063B29] justify-center flex items-center w-52 h-52">
                        <div>
                            <img className='mx-auto' src={logo3
                            } alt="" />
                            <h1 className="text-center font-semibold text-xl">Web Development</h1>
                        </div>
                    </div>
                    <div className="border border-[#063B29] justify-center flex items-center w-52 h-52">
                        <div>
                            <img className='mx-auto w-40 rounded-full' src={logo4} alt="" />
                            <h1 className="text-center font-semibold text-xl">Data structure</h1>
                        </div>
                    </div>


                </div>
                <Link to='/contact' className='flex mt-20 justify-center'>
                    <button className='btn bg-[#063B29] hover:bg-[#063B29] text-white'><AiOutlinePhone className='text-xl'></AiOutlinePhone> Contact Us</button>
                </Link>
            </div>
        </div>
    );
};

export default About;