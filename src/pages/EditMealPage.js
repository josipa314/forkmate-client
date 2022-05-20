import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
/* import "./EditMealPage.css" */

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

        axios.put(`${process.env.REACT_APP_API_URL}/meals/${mealId}`, newDetails)
            .then(response => {
                props.callbackUpdateMealList();
                navigate("/meals"); // redirect to meal list
                // navigate(`/meals/${response.data._id}`); // redirect to meal page
            })
            .catch(e => console.log("error updating meal...", e));
    }

    return (
        <section className="EditMealPage">
            <h1>Edit</h1>

            <form onSubmit={handleSubmit}>
            <label>
                    Type:
                    <input
                        type="text"
                        name="type"
                        value={type}
                        required={true}
                        onChange={(e) => setType(e.target.value)}
                    />
                </label>
                {/* <label> Type:
                    <select name="type">
                        {enum.map(key => (
                        <option value={key} key={key}>{serverity[key]}</option> ))}
                    </select>
                </label> */}
                <label>
                    Title
                    <input
                        type="text"
                        name="title"
                        value={title}
                        required={true}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>

                <label>
                    Description
                    <input
                        type="text"
                        name="description"
                        value={description}
                        required={true}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>

                <label>
                WhereWhen
                    <input
                        type="text"
                        name="whereWhen"
                        value={whereWhen}
                        required={true}
                        onChange={(e) => setWhereWhen(e.target.value)}
                    />
                </label> 
                <label>
                Company
                    <input
                        type="text"
                        name="company"
                        value={company}
                        required={true}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                </label> 


                <button type="submit">Update</button>

            </form>

        </section>
    )
}

export default EditMealPage;