import axios from "axios";
import { NavLink } from "react-router-dom";
/* import "./MealsListPage.css" */


function MealsListPage(props){


    const renderMeals = () => {
        const result = props.meals.map( (meal) => {
            return (
                <div key={meal._id} className="meal-summary box">
                    <p>{meal.type}</p>
                    <p>{meal.title}</p>
                    <p>{meal.description}</p>
                    <p>{meal.whereWhen}</p>
                   
                   
                        <button>
                        <NavLink to={`/meals/${meal._id}`}>More Details</NavLink>
                        </button>
                  
                </div>
            )
        });
        return result;
    }

    return (
        <div className="MealsListPage">
            <h1>Today's Meals</h1>

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
