import { Outlet } from "react-router-dom";
import Navbar from "../pages/headers/navbar/Navbar";
import Footer from "../pages/footer/Footer";



const MainlayOut = () => {
    return (
        <div>
            <div className="max-w-6xl lg:p-0 mx-auto font-poppins text-[#403F3F]">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <div className='w-full'>
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default MainlayOut;