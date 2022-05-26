import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css"
import "./EditMealPage.css"

function EditMealPage(props) {

    const navigate = useNavigate();

    const {mealId} = useParams();

    const mealDetails = props.meals?.find( meal => meal._id === mealId); // get the details of the meal that we're trying to edit

    const [type, setType] = useState(mealDetails?.type);
    const [title, setTitle] = useState(mealDetails?.title);
    const [description, setDescription] = useState(mealDetails?.description);
    const [whereWhen, setWhereWhen] = useState(mealDetails?.whereWhen);
    const [company, setCompany] = useState(mealDetails?.company);
    const [user, setUser] = useState(mealDetails?.user); 

    const handleSubmit = (e) => {
        e.preventDefault();

        const newDetails = {
            type,
            title,
            description, 
            whereWhen,
            company,       
            user
        }

        const storedToken = localStorage.getItem('authToken');

        axios.put(`${process.env.REACT_APP_API_URL}/meals/${mealId}`, newDetails,{ headers: { Authorization: `Bearer ${storedToken}` }})
            .then(response => {
                props.callbackUpdateMealList();
                navigate("/meals"); // redirect to meal list
                
            })
            .catch(e => console.log("error updating meal...", e));
    }

    return (
        <main className="wrapper">
        <section className="container">
            <div className="EditMealPage-heading">
                <h1>Edit</h1>
            </div>
        <div className="EditMealPage">

            <form onSubmit={handleSubmit}>
            <label>Type:  </label>
                    <input
                        type="text"
                        name="type"
                        value={type}
                        required={true}
                        onChange={(e) => setType(e.target.value)}
                    />
               
                <label> Title: </label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        required={true}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                <label> Description:  </label>  
                    <input
                        type="text"
                        name="description"
                        value={description}
                        required={true}
                        onChange={(e) => setDescription(e.target.value)}
                    />       
                <label> WhereWhen:  </label>    
                    <input
                        type="text"
                        name="whereWhen"
                        value={whereWhen}
                        required={true}
                        onChange={(e) => setWhereWhen(e.target.value)}
                    />
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                 
                <button type="submit">Update</button>

            </form>

    

        </div>
        </section>
        </main>
    )
}

export default EditMealPage;