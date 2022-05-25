import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "../App.css"
import "./MealDetailsPage.css"

function MealDetailsPage(props){
    const {mealId} = useParams();
     const mealsArr = props.meals;
     const details = mealsArr.find((meal) => {
    return meal._id == mealId;
     })
    console.log (details)
   
    const renderDetails = () => {
        return (
        <>
        <div key={details._id}>
           <p>type: {details.type}</p>
           <p>name: {details.title}</p>
           <p>details: {details.description}</p> 
           <p>where&when: {details.whereWhen}</p>
           <p>proposed by: {details.user.name}</p>
           <p>at company: {details.company.name}</p>
            <br />
{/*          <img src={details.image_url} alt={details.title} />
                <br /> */}
                <br/>
            <p>Interested?</p>
                <button> Let {details.user.name} know</button>
           </div>
        </>
    );
}
      return (
        <>
        <main class="wrapper">
            <div class="container">
                <div className="MealDetails-Container">
                    {details ? renderDetails()  : <p>Loading...</p>}
                </div>
            </div>
        </main>
        </>
    );
}
export default MealDetailsPage;