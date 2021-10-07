import React, { useState } from 'react';
import './Login.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseAuthentication from '../Firebase/Firebase.initialize';
firebaseAuthentication();

const auth = getAuth();
const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handelEmail = (event) => {
        console.log(event.target.value);
        setEmail(event.target.value)
    }
    const handelPassword = (event) => {
        if ((event.target.value).length < 6) {
            console.log('pass shoud be 6');
        }
        setPassword(event.target.value);
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
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
                        <h2 className="text-info">Please Register</h2>
                        <form onSubmit={handelSubmit}>
                            <input
                                onBlur={handelEmail}
                                className="input-felid"
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                            />
                            <br />
                            <p>{error}</p>
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
                                value="Register"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;