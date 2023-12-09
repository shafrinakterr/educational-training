import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
const EduCards = () => {
    useEffect(()=>{
        Aos.init({duration: 1500})
    },[])
    const cards = useLoaderData()
    return (
        <div className="text p-4 mt-14 text-center" >
            <h1 data-aos="fade-down-right" className="text-4xl text-[#063B29] font-semibold">We're offering you exciting sessions and events</h1>
            <div  className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mt-10'>
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
                
            </div>
        </div>
    );
};

export default EduCards;