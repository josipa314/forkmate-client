import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

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
           <p>{details.type}</p>
           <p>{details.title}</p>
           <p>{details.description}</p> 
           <p>{details.whereWhen}</p>
           <p>{details.company.name}</p>
           <p>{details.user.name}</p> <br />
{/*          <img src={details.image_url} alt={details.title} />
                <br /> */}
           </div>
        </>
    );
}
      return (
        <>
            {details ? renderDetails()  : <p>Loading...</p>}
        </>
    );
}
export default MealDetailsPage;