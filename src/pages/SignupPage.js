import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Select from 'react-select';

import "../App.css"
import "./SignupPage.css"


function SignupPage(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [company, setCompany] = useState("Netflix"); 
    const [enumCompanyvalues, setEnumCompanyvalues] = useState("");

    const [errorMessage, setErrorMessage] = useState(undefined);

    const enums = [
        { value: 'Netflix', label: 'Netflix' },
        { value: 'Microsoft', label: "Microsoft" },
        { value: 'TooGoodToGo', label: 'TooGoodToGo' },
        { value: 'IronHack', label: 'IronHack' },
      ];

    const navigate = useNavigate();

    useEffect(() => {
        fetchEnumCompanyvalues();
      }, []);


    const handleSignupSubmit = (e) => {
        e.preventDefault();
        
        const requestBody = { email, password, name, company};

        axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, requestBody)
            .then((response) => {
                navigate('/login');
            })
            .catch((error) => {
                console.log(error)
                const errorDescription = error.response.data.message;
                console.log("error creating account", errorDescription)
                setErrorMessage(errorDescription);
            })
    };

    const fetchEnumCompanyvalues = () => {
        axios.get(`${process.env.REACT_APP_API_URL}/company/enumcompanyvalues`)
            .then(response => {
                console.log(response.data);
                setEnumCompanyvalues(response.data);
            })
            .catch(e => console.log("error getting company from API...", e))
    }

        if (enumCompanyvalues == "") {
                return <h1>Loading</h1>
            }

            const handleChange = enumCompanyvalues => {
                setEnumCompanyvalues(enumCompanyvalues.label)
            }
    
    return (
        <main className="wrapper">
        <section className="container">
            <div className="signup-heading">
                <h1>Register</h1>
            </div>
            <div className="signup-form">
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <form onSubmit={handleSignupSubmit}>
                    <label>Email: </label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        required={true}
                        onChange={(e) => setEmail(e.target.value)}
                    />
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
                    

                    <label>Full Name: </label>
                    <input
                        type="text"
                        name="full-name"
                        value={name}
                        required={true}
                        onChange={(e) => setName(e.target.value)}
                    />
                 
                    

                    <label>
                   
                    
                    <br/>
                    <div className="dropdown-company-container">
                    <Select 
                            placeholder="Your company"
                            value={enums.value}
                            options={enums}
                            onChange={handleChange}
                            className="dropdown-menu-company"
                        />
                        </div>
                          
                        {/* <select onChange={(e) => setCompany(e.target.value)} name="company" >
                            {enumCompanyvalues.map(key => (
                            <option value={key}>{key}</option> ))}
                        </select> */}
                    </label>
                   

                    <button type="submit">Sign Up</button>
                    <br/>
                    <br/>
                    <br/>

                    <p className="signup-question">Already have account?</p>
                    <button className="login-button">
                    <Link className="login-text" to={"/login"}> Login</Link></button>

                </form>


            </div>
        </section>
        </main>
        
    )
}

export default SignupPage;