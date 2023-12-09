import { Link, useLoaderData, useParams } from "react-router-dom";
import { BsArrowLeft } from 'react-icons/bs';

const Details = () => {
    const loadsdata = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const loaderdata = loadsdata.find(details => details.id === idInt);
    const { img, title, description } = loaderdata;
    return (
        <div>
            <div className="card w-full mb-10 lg:-mb-20 bg-[#FAF0E6] shadow-xl">
                <figure><img className="mt-5 p-3 md:p-0 " src={img} alt="Shoes" /></figure>
                <div className="text-[#063B29] text-center  mt-10">
                    <div className="text-center space-y-3">
                        <h2 className="text-2xl font-semibold ">{title}</h2>
                        <p>{description}</p>
                        <div className="mb-10 pb-5">
                            <Link to='/'>
                                <button className="btn bg-[#063B29] hover:bg-[#FAF0E6] hover:text-[#063B29] hover:border-[#063B29] text-white"><BsArrowLeft className="text-xl font-bold"></BsArrowLeft> Back to home</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;