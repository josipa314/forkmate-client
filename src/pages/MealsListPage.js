import axios from "axios";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
/* import "./MealsListPage.css" */


function MealsListPage(props){


    const [filteredList, setFilteredList] = useState(props.meals);
    const [selectedType, setSelectedType] = useState("");
    const [selectedCompany, setSelectedCompany] = useState("");

    useEffect(() => {
        var filteredMeals = filterByType(props.meals);
        filteredMeals = filterByCompany(filteredMeals);
        setFilteredList(filteredMeals);
      }, 
      [selectedType, selectedCompany]);

    /* const renderMeals = () => {
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
    } */

     const renderMeals = () => {
        const result = filteredList.map((meal) => {
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


    const filterByType = (filteredMeal) => {
        // Avoid filter for empty string
        if (!selectedType) {
          return filteredMeal;
        }
      
        const filteredMeals = filteredMeal.filter(
          (meal) => meal.type.split(" ").indexOf(selectedType) !== -1
        );
        return filteredMeals;
      };

      const filterByCompany = (filteredMeal) => {
        // Avoid filter for null value
        if (!selectedCompany) {
          return filteredMeal;
        }
    
        const filteredCars = filteredMeal.filter(
          (meal) => meal.company === selectedCompany
        );
        return filteredCars;
      };

      // Update seletedType state
const handleTypeChange = (event) => {
  setSelectedType(event.target.value);
};


/* const handleCompanyChange = (event) => {
    const inputCompany = setSelectedCompany(event.target.id);
  
    if (inputCompany === selectedCompany) {
      setSelectedCompany("");
    } 
    else {
      setSelectedCompany(inputCompany);
    }
  }; */


    return (
   <>
        <div className="MealsListPage">
            <h1>Today's Meals</h1>

            <div className="type-filter">
  <div>Filter by type of meal:</div>
  <select
    id="type-input"
    value={selectedType}
    onChange={handleTypeChange}>
    <option value="">All</option>
    <option value="snack">Snack</option>
    <option value="lunch">Lunch</option>
    <option value="dinner">Dinner</option>
  </select>
</div>

  </div>
  
              <section>
                 { props.meals === null
                    ? <p>loading...</p>
                    : renderMeals()
                }
             </section> 


{/* 
            <div>
    {filteredList.map((item, index) => (
       <div className="car-item" key={index}>
         <div className="car-name">{`Name: ${item.type}`}</div>
         <div className="car-year">{`Title: ${item.title}`}</div>
        

       </div>
       
       
    ))} */}

              
       

        </>
    );
}

export default MealsListPage;
