import logo1 from '../assets/img/support1.jpg'
import logo2 from '../assets/img/support2.avif'
import logo3 from '../assets/img/supppor3.avif'
import logo4 from '../assets/img/software.jpg'
import logo5 from '../assets/img/software.jpg'
import logo6 from '../assets/img/software.jpg'

const Supporeted = () => {

    return (
        <div className="mt-8 text-[#063B29]">
            <h1 className="text-center text-3xl font-semibold text-[#063B29]">We are Supported by</h1>
            <div className=" mt-10">
                {/* <Marquee className="" pauseOnHover={true} speed={100}> */}
                    <div className="flex items-center mt-5 ">
                        <div className='mx-auto'>
                            <img className='w-28 min-h-[90px] mx-auto' src={logo1} alt="" />
                            <p className='mt-4'>Machine Learning</p>
                        </div>
                        <div className='mx-auto'>
                            <img className='w-28 min-h-[90px] mx-auto' src={logo2} alt="" />
                            <p className='mt-3'>Database Management</p>
                        </div>
                        <div className='mx-auto'>
                            <img className='w-28 min-h-[100px] mx-auto' src={logo3} alt="" />
                            <p>Programming</p>
                        </div>
                        <div className='mx-auto'>
                            <img className='w-28 min-h-[100px] mx-auto' src={logo4} alt="" />
                            <p>Software Engineering</p>
                        </div>
                        <div className='mx-auto'>
                            <img className='w-28 min-h-[100px] mx-auto' src={logo5} alt="" />
                            <p>Web Development</p>
                        </div>
                        <div className='mx-auto'>
                            <img className='w-28 min-h-[100px] mx-auto' src={logo6} alt="" />
                            <p>Data Structures</p>
                        </div>
                    </div>
                {/* </Marquee> */}
            </div>
        </div>
    );
};

export default Supporeted;