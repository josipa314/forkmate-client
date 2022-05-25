import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import {AuthContext} from "../context/auth.context"

import "../App.css"
import "./LoginPage.css"

function LoginPage(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();

    const { storeToken, authenticateUser } = useContext(AuthContext);


    const handleLoginSubmit = (e) => {
        e.preventDefault();

        const requestBody = { email, password };

        axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, requestBody)
            .then((response) => {
                // login successful
                
                const jwt = response.data.authToken;
                console.log('Login was sucessful. JWT token: ', jwt);
                
                storeToken(jwt);
                authenticateUser();

                navigate('/');
            })
            .catch((error) => {
                // login failed
                console.log(error)
                 const errorDescription = error.response.data.message;
                console.log("error loggin in...", errorDescription)
                setErrorMessage(errorDescription); 
            })
    };

    return (
        <main className="wrapper">
        <section className="container">
          <div className="login-heading">
                <h1>Login</h1>
          </div>
          <div className="login-form">
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <form onSubmit={handleLoginSubmit}>
                    <label>Email: </label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br/>
                    <br/>

                    <label>Password: </label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        required={true}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br/>
                    <br/>

                    <button type="submit">Login</button>
                </form>


                <p>Don't have an account yet?</p>
                <Link to={"/signup"}> Sign Up</Link>

           </div>

        </section>
        </main>
    )
}

export default LoginPage;