import axios from "axios";
import { NavLink } from "react-router-dom";
/* import "./MealsListPage.css" */


function MealsListPage(props){

     const deleteMeal = (mealId) => {
        axios.delete(`${process.env.REACT_APP_API_URL}/meals/${mealId}`)
            .then(response => {
                props.callbackUpdateMealList();
            })
            .catch(e => console.log("error deleting meal...", e)); 
            }
    

    const renderMeals = () => {
        const result = props.meals.map( (element) => {
            return (
                <div key={element._id} className="meal-summary box">
                    <p>{element.title}</p>
                    <NavLink to="/">More details</NavLink> |&nbsp;
                    <NavLink to={`/meals/${element._id}/edit`}>Edit</NavLink> |&nbsp;
                    <a href="#" onClick={() => {deleteMeal(element._id)}}>Delete</a>
                </div>
            )
        });
        return result;
    }

    return (
        <div className="MealsListPage">
            <h1>List of Meals</h1>

             <section>
                 { props.meals === null
                    ? <p>loading...</p>
                    : renderMeals()
                }
             </section>

        </div>
    );
}

export default MealsListPage;
