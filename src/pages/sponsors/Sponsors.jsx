
import { useEffect, useState } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
const Sponsors = () => {
    useEffect(() => {
        Aos.init({duration:2000})
    }, [])
    const [sponsors, setSponsors] = useState([]);
    useEffect(() => {
        fetch('/education.json')
            .then(res => res.json())
            .then(data => setSponsors(data))

    }, [])
    return (
        <div className="mt-40 p-4 text-center lg:-mb-20">
            <h1 data-aos="fade-down-right" className="text-4xl text-[#063B29] font-semibold">Our Honourable Sponsors</h1>
            <div data-aos="flip-left" className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    sponsors.map(sponsor => <div key={sponsor.spon_id}>
                        <div className="card card-compact mt-10 bg-[#FAF0E6] shadow-xl">
                            <figure><img className=" h-[250px] rounded-lg w-[300px] m-5" src={sponsor.sponsor.img} /></figure>
                            <div className=" text-[#063B29]">
                                <h2 className="text-lg mb-5 font-semibold flex justify-center text-center">{sponsor.sponsor.title}</h2>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Sponsors;