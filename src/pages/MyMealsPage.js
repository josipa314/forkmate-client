import axios from "axios";
import { NavLink,useNavigate } from "react-router-dom";
import React, { useEffect, useState} from "react";


import "../App.css"
import "./MyMealsPage.css"


function MyMealsPage(props){
    
   const navigate = useNavigate();
    
    /* const { user } = useContext(AuthContext);  */

    const [myMeals, setMyMeals] = useState([]);
     const storedToken = localStorage.getItem("authToken"); 
 
/*      const {isLoggedIn, isLoading, logOutUser} = useContext(AuthContext); */

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/mymeals`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
    .then( response => {
        //console.log(response.data)
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
                
               
                navigate("/meals"); 
            })
            .catch(e => console.log("error deleting meal...", e)); 
            } 
    

    const renderMeals = () => {
        const result = myMeals.map( (meal) => {
            return (
                <div key={meal._id} className="MyMeals-Container ">
                    <p>Type: {meal.type}</p>
                    <p>Title: {meal.title}</p>
                    <p>Description: {meal.description}</p>
                    <p>Where & When: {meal.whereWhen}</p>
                
                    <br/>
                    <br/>
                    <br/>
                    <div className="button-wrapper">
                    <button className="edit-container">
                    <NavLink className="edit-button" to={`/meals/${meal._id}/edit`}>Edit</NavLink> &nbsp;
                    </button>
                    <button className="delete-container" >
                     <a className="delete-button" href="#" onClick={() => {deleteMeal(meal._id)}}>Delete</a>
                   </button>
                   </div>
                   <br/>
                   <br/>
                   
                </div>
            )
        });
        return result;
    }

    return (
      <main className="wrapper">
      <section className="container">
        <div className="MyMealsContainer">
{/*          { isLoggedIn &&  
            <> */}<h1>Your Meals</h1><section>
                    {myMeals === null
                        ? <p>loading...</p>
                        : renderMeals()}
                </section>
{/*                 </>
         }
          { !isLoggedIn &&  
            <>
            <br/>
            <br/>
                    <NavLink to="/signup">Register</NavLink> | 
                    <NavLink to="/login">Login</NavLink>
            </>
        } */}

            {/* <button>
                <a href="/">Back</a>
            </button>
 */}
        </div>
        </section>
        </main>
    );
}

export default MyMealsPage;
