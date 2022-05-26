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
    /* console.log (details) */

    const Mailto = ({ email, subject, body, ...props }) => {
        return (
          <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
            {props.children}
          </a>
        );
      };

      
   
    const renderDetails = () => {
        return (
        <>
        <div className="details-info" key={details._id}>
           <p>Type: {details.type}</p>
           <p>Name: {details.title}</p>
           <p>Description: {details.description}</p> 
           <p>Where&When: {details.whereWhen}</p>
           <p>Offered by: {details.user.name}</p>
           <p>Company: {details.company.name} - {details.company.city} </p>
            <br />
           <br/>
            <p>Need extra info?</p>
               
                <Mailto
                email={details.user.email}
                subject={`Hey ${details.user.name}`}
                body="Let's connect!"
              >
                <button type="button">
                Connect with {details.user.name}
                </button>
              </Mailto>
           </div>
           <div className="picture-details">
           {/* <img src={} className="App-logo" alt="logo"/>   */}
           </div>
        </>
    );

   
}
      return (
        <>
        <main className="wrapper">
            <div className="container">
                <div className="MealDetails-Container">
                    {details ? renderDetails()  : <p>Loading...</p>}
                </div>
            </div>
        </main>
        </>
    );
}
export default MealDetailsPage;