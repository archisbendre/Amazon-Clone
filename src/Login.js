import React, {useState} from 'react'
import "./Login.css";
import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase";

function Login() {
    const history = useHistory();
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');


    const login = event=> {
        event.preventDefault(); //this stops the refresh
    // do the login logic
    auth.signInWithEmailAndPassword(email,password)
.then((auth)=> {
    //logged in, redirect to homepage...
    history.push("/");
})
.catch(e=>alert(e.message))
    };

    const register = event=> {
        event.preventDefault(); //this stops the refresh
    // do the register logic..

    auth.createUserWithEmailAndPassword(email, password)
    .then(auth => {

    })
    .catch((e)=> alert(e.message));
    }



    return (
        <div className="login">
             <Link to="/">
                {/*logo on the left --> img*/}
                <img className="login__logo" src="https://image.shutterstock.com/image-photo/kiev-ukraine-may-07-2015-260nw-276929006.jpg" alt=""/>

            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                   <h5>E-mail</h5>
                   <input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
                   <h5>Password</h5>
                   <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button onClick={login} type="submit" className="login__signInButton">Sign in</button>
                </form>
                <p>By singin-in you agree to Amazon's Conditions of privacy,see our Privacy Notice, our Cookies Notice and our Policy Notice.</p>
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
            
        </div>
    )
}

export default Login
