import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import aos from 'aos/dist/aos.css'
const Services = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/education.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <h1 data-aos='fade-right' className="text-[#063B29] text-center text-4xl font-semibold">Our Services</h1>
            <div data-aos="fade-up" className="grid  lg:-mb-20 grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
                {
                    data.map(adata => <div key={adata.id}>
                        <div className="card text-center card-compact bg-base-100 shadow-xl">
                            <figure><img className="h-[200px] m-5  rounded-lg" src={adata.img} alt={adata.title} /></figure>
                            <div className="card-body text-[#063B29] font-semibold">
                                <h2 className="text-lg">{adata.title}</h2>
                                <p className="font-semibold">{adata.price}</p>
                                <div className="card-actions justify-center ">
                                    <Link to={`/details/${adata.id}`}>
                                        <button className="btn text-white hover:bg-[#063B29] bg-[#063B29] ">See more</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;