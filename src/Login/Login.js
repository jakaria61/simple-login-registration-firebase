import React, { useState } from 'react';
import './Login.css'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import firebaseAuthentication from '../Firebase/Firebase.initialize';
firebaseAuthentication()
const auth = getAuth();
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handelEmail = (event) => {
        console.log(event.target.value)
        setEmail(event.target.value);
    }
    const handelPassword = (event) => {
        if (event.target.value < 6) {
            return;
        }
        else {
            setPassword(event.target.value);
        }
    }
    const handelSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }
    const handleGitHubLogin = () => {
        const gitProvider = new GithubAuthProvider()
        signInWithPopup(auth, gitProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }
    return (
        <div>
            <div className="login-box d-flex align-items-center justify-content-center">
                <div className="login">
                    <div className="login-box">
                        <h2 className="text-success">Please Login</h2>
                        <form onSubmit={handelSubmit}>
                            <input
                                onBlur={handelEmail}
                                className="input-felid"
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                            />
                            <br />
                            <input
                                onBlur={handelPassword}
                                className="input-felid"
                                type="password"
                                name="password"
                                placeholder="Enter your Password"
                            />
                            <input

                                className="mt-3 w-50 btn btn-success m-auto"
                                type="submit"
                                value="Login"
                            />
                        </form>
                    </div>
                    <button onClick={handleGoogleSignIn} className="me-2 btn btn-outline-success" >
                        Login with Google <i class="fab fa-google"></i>
                    </button>
                    <button onClick={handleGitHubLogin} className="me-2 btn btn-outline-success" >
                        Login with Github <i class="fab fa-github"></i>
                    </button>

                    <button className="mt-2 btn btn-outline-success" >
                        Reset Password
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;