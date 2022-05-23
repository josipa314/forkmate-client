import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function SignupPage(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [company, setCompany] = useState("Netflix"); 
    const [enumCompanyvalues, setEnumCompanyvalues] = useState("");

    const [errorMessage, setErrorMessage] = useState(undefined);

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
                const errorDescription = error.response.data.message;
                console.log("error creating account", errorDescription)
                setErrorMessage(errorDescription);
            })
    };

    const fetchEnumCompanyvalues = () => {
        axios.get(process.env.REACT_APP_API_URL + "/company/enumcompanyvalues")
            .then(response => {
                console.log(response.data);
                setEnumCompanyvalues(response.data);
            })
            .catch(e => console.log("error getting company from API...", e))
    }

        if (enumCompanyvalues == "") {
                return <h1>Loading</h1>
            }
    
    return (
        <div className="SignupPage">
            <h1>Register</h1>

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

                <label>Full Name: </label>
                <input
                    type="text"
                    name="full-name"
                    value={name}
                    required={true}
                    onChange={(e) => setName(e.target.value)}
                />
                <br/>
                <br/>

               <label>Company: 
                    <select onChange={(e) => setCompany(e.target.value)} name="company" >
                        {enumCompanyvalues.map(key => (
                        <option value={key}>{key}</option> ))}
                    </select>
                </label>
                <br/>
                <br/>

                <button type="submit">Sign Up</button>
            </form>

            <p>Already have account?</p>
            <Link to={"/login"}> Login</Link>
        </div>
    )
}

export default SignupPage;