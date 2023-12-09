import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";
const SingUpGoogle = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, googleProvider,githubProvider)
            .then((result) => {
                const loginUser = result.user;
                console.log(loginUser);
                setUser(loginUser)
            })
            .catch(error => {
                console.log('error', error.message)
            })
        }
        const handleGithubSingIn=()=>{
           signInWithPopup(auth, githubProvider)
            .then((result)=>{
                const loginUser = result.user;
                setUser(loginUser)
                console.log(loginUser)
            })
           .catch(error =>{
            console.log(error.message)
           })
        }
    const handleSingOut = () => {
        signOut(auth)
            .then((result => {
                console.log(result);
                setUser(null)
            }))
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            {
                user ? <button onClick={handleSingOut}>Google sing out</button> :
                    <>
                        <button className="" style={{ marginRight: '10px', marginTop: '30px' }} onClick={handleGoogleSingIn}>Google Login</button>
                        <button onClick={handleGithubSingIn}>Github login</button>
                    </>
            }

            {user && <div>
                <h1>User name: {user.displayName}</h1>
                <p>Email: {user?.email}</p>
                <p>Phone number: {user.phoneNumber}</p>
                <img src={user.photoURL} alt="" />
            </div>

            }
        </div>
    );
};

export default SingUpGoogle;