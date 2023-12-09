import { AiOutlineMail,AiOutlinePhone } from "react-icons/ai";
import {  CiLocationOn} from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { BsTwitter} from "react-icons/bs";
import { FaFacebookF,FaInstagramSquare} from "react-icons/fa";
const Contact = () => {
    return (
        <div className="rounded-lg bg-[#FAF0E6] mb-20 lg:h-[500px] h-[600px] items-center mt-10 p-5 lg:-mb-20">
            <div>

                <div className="lg:flex md:flex items-center justify-around ">
                    <div>
                        <div className="space-y-6 flex-col gap-6 mt-5">
                            <h1 className="text-2xl font-semibold text-[#063B29] ">Contact us</h1>
                            <div className="relative h-11 w-full">
                                <input type="text"
                                    placeholder="Your name"
                                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#063B29] focus:outline-0 disabled:border-0 disabled:bg-[#063B29]"
                                />
                                <label className="after:content[' '] pointer-events-none absolute left-0 -top-2.5 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#063B29] after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-[#063B29]peer-focus:after:scale-x-100 peer-focus:after:border-[#063B29]peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                </label>
                            </div>
                            <div className="relative h-11 w-full ">
                                <input type="email"
                                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-[#063B29] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder="Enater your email"
                                />
                                <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-[#063B29] after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#063B29] peer-focus:after:scale-x-100 peer-focus:after:border-[#063B29] peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">

                                </label>

                            </div>
                            <div>
                                <textarea className="border w-64 lg:w-60px border-[#063B29] p-2" name="" id="" cols="50" rows="3" placeholder="Your comment"></textarea>
                            </div>
                            <input type="submit" className="border bg-[#063B29] w-28  rounded-lg text-white p-3" name="Submit" id="" />
                        </div>
                    </div>
                    <div className="text-[#063B29]">
                        <h1 className="text-2xl mt-2 font-semibold text-[#063B29] mb-5">Contact details</h1>
                        <p className="flex items-center gap-2"><span className="font-semibold flex items-center gap-2"><AiOutlineMail></AiOutlineMail> Email: </span>edutech1@gmail.ocm</p>
                        <p className="flex items-center gap-2"><span className="font-semibold flex items-center gap-2"><AiOutlinePhone className=""></AiOutlinePhone> Phone: </span>197450212</p>
                        <p className="flex items-center gap-2"><span className="font-semibold flex items-center gap-2"><CiLocationOn></CiLocationOn> Location:</span> Savar, Dhaka </p>

                        <div className="flex text-3xl gap-3 mt-5">
                            <FaFacebookF className="text-blue-500"></FaFacebookF>
                            <BsTwitter className="text-blue-500"></BsTwitter>
                            <FaYoutube className="text-red-700 "></FaYoutube>
                            <FaInstagramSquare className="bg-clip-text   text-[#FF0D74] "></FaInstagramSquare>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;