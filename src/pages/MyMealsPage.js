import axios from "axios";
import { NavLink } from "react-router-dom";
/* import "./MealsListPage.css" */


function MyMealsPage(props){

    

  const deleteMeal = (mealId) => {

    const storedToken = localStorage.getItem('authToken');

        axios.delete(`${process.env.REACT_APP_API_URL}/meals/${mealId}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
        )

            .then(response => {
                props.callbackUpdateMealList();
            })
            .catch(e => console.log("error deleting meal...", e)); 
            } 
    

    const renderMeals = () => {
        const result = props.meals.map( (meal) => {
            return (
                <div key={meal._id} className="meal-summary box">
                    <p>{meal.type}</p>
                    <p>{meal.title}</p>
                    <p>{meal.description}</p>
                    <p>{meal.whereWhen}</p>
                
                
                    <button>
                    <NavLink to={`/meals/${meal._id}/edit`}>Edit This Meal</NavLink> |&nbsp;
                    </button>
                    <button>
                     <a href="#" onClick={() => {deleteMeal(meal._id)}}>Delete This Meal</a>
                   </button>
                </div>
            )
        });
        return result;
    }

    return (
        <div className="MealsListPage">
            <h1>Your Meals</h1>

             <section>
                 { props.meals === null
                    ? <p>loading...</p>
                    : renderMeals()
                }
             </section>

        </div>
    );
}

export default MyMealsPage;
