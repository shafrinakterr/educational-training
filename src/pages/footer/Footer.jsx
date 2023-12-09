import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-[#FAF0E6] text-[#063B29] p-10  lg:mt-44 md:mt-44">
                <nav className="text-[#071a14]">
                    <header className=" text-2xl font-semibold text-[#063B29]">Services</header>
                    <a className="link link-hover text-[#063B29]">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="text-2xl font-semibold text-[#063B29]">Company</header>
                    <Link to='/about' className="link link-hover">About us</Link>
                    <Link to='/contact' className="link link-hover">Contact</Link>
                </nav>
                <nav>
                    <header className="text-2xl font-semibold text-[#063B29]">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <header className="text-2xl font-semibold text-[#063B29]">Newsletter</header>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-[#063B29]">Enter your email address</span>
                        </label>
                        <div className="relative ">
                            <input type="email" placeholder="Enater Your Email" className="input text-[#063B29]  border-[#063B29] w-full pr-16" />
                            <button className="btn border-[#063B29] border bg-[#063B29] text-white absolute top-0 right-0 rounded-l-none">Submit</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;