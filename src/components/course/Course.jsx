import book from '../../assets/img/book.jpg'
import edu2 from '../../assets/img/Training-Programs.jpeg'
import edu1 from '../../assets/img/Career-Fairs.webp'
import { CgWebsite } from 'react-icons/cg';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Course = () => {
        useEffect(()=>{
            Aos.init({duration:2000})
        },[])
    return (
        <div>
            <h1 className='text-3xl uppercase mb-3 font-semibold text-center mt-16 text-[#063B29]  ' data-aos="fade-down">Experience exCellence our services</h1>
            <div className='md:h-[500px] lg:h-[500px] p-4 w-full md:flex lg:flex'>
                <div data-aos="fade-down" className='bg-[#FAF0E6] pt-20 w-full h-[600px]'>
                    <div className='text-[#063B29] pl-8'>
                        <h1 className='text-3xl font-semibold uppercase'>Experience our services</h1>
                        <ol className=' text-[#063B29]  space-y-10  mt-5'>
                            <li className='flex items-center gap-2'><CgWebsite className='text-[#29ff8d] p-1 rounded-full text-3xl border-2 border-[#063B29] border-dotted rounded-ful  '></CgWebsite> Website Desing</li>
                            <li  className='flex text-sm items-center gap-2'><CgWebsite className='text-[#29ff8d] p-1 rounded-full text-3xl border-2 border-dotted border-[#063B29] rounded-ful  '></CgWebsite> Project Management</li>
                            <li  className='flex text-sm items-center gap-2'><CgWebsite className='text-[#29ff8d] border-[#063B29] p-1 rounded-full text-3xl border-2 border-dotted rounded-ful  '></CgWebsite> Data Science and Analytics</li>
                            <li  className='flex text-sm items-center gap-2'><CgWebsite className='text-[#29ff8d] p-1 rounded-full border-[#063B29] text-3xl border-2 border-dotted rounded-ful  '></CgWebsite> Cybersecurity and IT Certifications</li>
                            <li className='flex text-sm items-center gap-2'><CgWebsite className='text-[#29ff8d] border-[#063B29] p-1 rounded-full text-3xl border-2 border-dotted rounded-ful  '></CgWebsite> Soft Skills and Communication</li>
                        </ol>
                    </div>
                </div>
                <div data-aos="fade-up" className='h-[600px]  bg-gray-600'>
                    <img className='h-[600px] w-[900px]' src={book} alt="" />
                </div>
                <div data-aos="fade-down" className='bg-[#FAF0E6] pt-20 w-full h-[600px]'>
                    <div className='text-[#063B29] pl-8'>
                        <h1 className='text-3xl uppercase font-semibold '>product demo</h1>
                        <p className='text-[#063B29]'>Some theorists foucs on a signal to overarching purpos of education</p>
                        <img className='w-[250px] mt-5' src={edu2} alt="" />
                        <img className='w-[250px] mt-5' src={edu1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;