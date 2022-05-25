import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import "../App.css"
import "./CreateMealPage.css"

function CreateMealPage(props) {

/*     const {isLoggedIn, isLoading, logOutUser} = useContext(AuthContext); */
    const [type, setType] = useState("lunch"); 
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [whereWhen, setWhereWhen] = useState("");
    const [enumvalues, setEnumvalues] = useState("");
 
    const navigate = useNavigate();

    useEffect(() => {
        fetchEnumvalues();
      }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newMeal = {
            type,
            title,
            description, 
            whereWhen,   
            /* company,       
            user */
        }

        const storedToken = localStorage.getItem('authToken');

        axios.post(process.env.REACT_APP_API_URL + "/meals", newMeal, { headers: { Authorization: `Bearer ${storedToken}` } })
            .then(response => {            
                props.callbackUpdateMealList();
                navigate("/meals"); // redirect to meal list
                // navigate(`/meals/${response.data._id}`); // redirect to meal page
            })
            .catch(e => console.log("error creating meal...", e));
    }

        const fetchEnumvalues = () => {
            axios.get(process.env.REACT_APP_API_URL + "/meals/enumvalues")
                .then(response => {
                    //console.log(response.data);
                    setEnumvalues(response.data);
                })
                .catch(e => console.log("error getting meals from API...", e))
    }
        if (enumvalues == "") {
                return <h1>Loading</h1>
            }

    return (
        <main className="wrapper">
        <section className="container">
            <div className="create-meal-heading">
                <h1>Create a new meal</h1>
            </div>
            <div className="create-meal">
{/*            { isLoggedIn &&  */} 
            
            <form onSubmit={handleSubmit}>
                    {/*               <label>
                       Type:
                      <input
                          type="text"
                          name="type"
                          value={type}
                          required={true}
                          onChange={(e) => setType(e.target.value)}
                      />
                  </label> */}
                    <label> Type:  </label>
                        <select onChange={(e) => setType(e.target.value)} name="type">
                            {enumvalues.map(key => (
                                <option  value={key}>{key}
                                </option>))}
                        </select>
                    <label> Title:  </label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            required={true}
                            onChange={(e) => setTitle(e.target.value)} />  
                    <label> Description:  </label>    
                        <input
                            type="text"
                            name="description"
                            value={description}
                            required={true}
                            onChange={(e) => setDescription(e.target.value)} />

                    <label> WhereWhen:   </label>   
                        <input
                            type="text"
                            name="whereWhen"
                            value={whereWhen}
                            required={true}
                            onChange={(e) => setWhereWhen(e.target.value)} />
                                
                    {/*  <label>
                        Company
                            <input
                                type="text"
                                name="company"
                                value={company}
                                required={true}
                                onChange={(e) => setCompany(e.target.value)}
                            />
                        </label>
                        <label>
                        User
                            <input
                                type="text"
                                name="user"
                                value={user}
                                required={true}
                                onChange={(e) => setUser(e.target.value)}
                            />
                        </label>  */}
                    <button type="submit">Create New Meal</button>
                </form>
                {/*             }
                        { !isLoggedIn &&  
                            <>
                            <br/>
                            <br/>
                                    <NavLink to="/signup">Register</NavLink> | 
                                    <NavLink to="/login">Login</NavLink>
                            </>
                        }
                */}
                </div>

        </section>
        </main>
    )
}

export default CreateMealPage;