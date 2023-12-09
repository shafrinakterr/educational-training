import { useContext, useState} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authprovider/AuthProvider";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import swal from "sweetalert";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";


const Login = () => {
    const auth = getAuth(app);
    console.log(app)
    const provider = new GoogleAuthProvider();
    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [logInSuccess, setLogInSuccess] = useState(" ");
    const [logInError, setLogInError] = useState(' ');

    const handleSubmit = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        login(email, password)
            .then((result => {
                console.log(result.user);
                setLogInSuccess(swal('Your login is SuccessFully'));
                navigate(location?.state ? location.state : '/');
                
            }))
            .catch(error => {
                console.log(error);
                setLogInError(swal('User is unvalid'))
         })
    }


    const handleSingInGoogle = () => {
        signInWithPopup(auth, provider)
            .then((resutl) => {
                const user = resutl.user;
                console.log(user)

            })
            .catch(error => {
                console.log('error', error.message);
            })
    }

    return (
        <div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="p-3  card flex-shrink-0 w-full lg:w-6/12 md:w-6/12 shadow-2xl bg-base-100">
                    <h1 className="text-center text-2xl  font-semibold mt-5 text-[#063B29] ">Login your account</h1> <hr className="mt-5" />
                    <form onSubmit={handleSubmit} className="p-10 space-y-5">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required type="email" name='email' placeholder="Enter your email" className="input input-bordered" />
                        </div>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full" />
                            <span className="absolute  top-4 right-2 " onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <AiOutlineEye></AiOutlineEye> :
                                        <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
                                }
                            </span>
                        </div>
                        <div className="form-control  mt-6">
                            <button className="btn  mt-3 bg-[#063B29] text-white capitalize btn-outline">Sing in</button>

                        </div>
                    </form>
                    <div className="flex -mt-5 mb-3 justify-center ">
                        <button className="flex btn btn-outline justify-center items-center text-[#063B29] bg-[#73eec59d] hover:bg-[#73eec59d] hover:text-[#063B29]" onClick={handleSingInGoogle}><FcGoogle className="text-xl"></FcGoogle><span className=" font-semibold underline text-sm ">Google Sing in</span></button>
                    </div> <hr />

                    <p className="mt-2 text-center mb-3 text-sm text-black font-medium">Dont Have An Account ? <Link to='/singup' className="text-[#063B29]  font-bold">Sing up</Link></p>
                </div>

            </div>
            
        </div>
    );
};

export default Login;