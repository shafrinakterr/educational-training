import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Card = ({ card }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    const { id, img, title, description, price } = card;

    return (
        <div>
            <div >
                <div data-aos="fade-up" className="card bg-[#FAF0E6] rounded-lg  shadow-xl">
                    <figure className=' m-5'><img className='h-[200px]  rounded-lg w-full' src={img} alt={title} /></figure>
                    <div className="p-3 text-start" >

                        <div className='flex items-center justify-between'>
                            <h2 className="card-title mt-2 mb-5 h-[30px]  text-xl  text-[#063B29]">{title}</h2>
                            <p className='text-[#063B29]'>{price}</p>
                        </div>


                        {
                            description?.length > 30 ? <p className=' text-[#063B29]'>{description.slice(0, 30)}...... <br />
                                <Link className='text-[#E66031] ' to={`/details/${id}`}>
                                    <button
                                        className="middle btn border-[#063B29] capitalize mt-3 none center mr-4 rounded-lg  bg-[#FAF0E6] py-3 px-6 font-sans text-sm font-bold  text-[#063B29] border  transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        data-ripple-light="true"
                                    >
                                        details More...
                                    </button>
                                </Link> </p> :
                                <p className='mt-5 text-white'>{description}</p>
                        }


                    </div>

                </div>

            </div>
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.object
}
export default Card;