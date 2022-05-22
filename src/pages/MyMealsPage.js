import axios from "axios";
import { NavLink} from "react-router-dom";
import React, { useEffect, useState} from "react";
/* import { AuthContext } from "../context/auth.context" */

/* import "./MealsListPage.css" */


function MyMealsPage(props){
    
   /*  const navigate = useNavigate(); */
    
    /* const { user } = useContext(AuthContext);  */

    const [myMeals, setMyMeals] = useState([]);
    const storedToken = localStorage.getItem("authToken");
 

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/mymeals`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
    .then( response => {
        console.log(response.data)
      setMyMeals(response.data); //save into state variable
      
    })
    .catch( e => console.log("error getting meals API", e))
  }, [])


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
        const result = myMeals.map( (meal) => {
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
                 { myMeals === null
                    ? <p>loading...</p>
                    : renderMeals()
                }
             </section>

        </div>
    );
}

export default MyMealsPage;
