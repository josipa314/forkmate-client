import axios from "axios";
import { NavLink } from "react-router-dom";
import { useEffect, useInsertionEffect, useState } from "react";
import heartIcon from "../assets/heart-icon.png";

import "../App.css"
import "./MealsListPage.css"

function MealsListPage(props){

    const [filteredList, setFilteredList] = useState(null);
    const [selectedType, setSelectedType] = useState("");
    const [selectedCompany, setSelectedCompany] = useState("");
    const [meals, setMeals] = useState(null)
    
    useEffect(()=> {
      axios.get(`${process.env.REACT_APP_API_URL}/meals`)
      .then(response => {
        /* console.log(response.data); */
        setFilteredList(response.data);
        setMeals(response.data)
      })
      .catch(e => console.log("error getting meals from API...", e))
    }, [])

    useEffect(() => {
        var filteredMeals = filterByType(meals);
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
              <div className="Meals-Container " >
                <div key={meal._id} className="meal-summary box">
                <p><img  src={heartIcon} alt="fireSpot"/></p>
                    <p>{meal.type}</p>
                    <p>{meal.title}</p>
                   {/*  <p>{meal.description}</p> */}
                    <p>{meal.whereWhen}</p>
                                   
                    <button >
                        <NavLink className="detail-button" to={`/meals/${meal._id}`}>More Details</NavLink>
                    </button>
                </div>
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
        // Avoid filter for empty string
        if (!selectedCompany) {
          
          return filteredMeal;
        }

        const filteredMeals = filteredMeal.filter(
          (meal) => meal.company.name.split(" ").indexOf(selectedCompany) !== -1
        );
        return filteredMeals;
    
        /* const filteredMeals = filteredMeal.filter(
          (meal) => meal.company.name == selectedCompany
        );
        console.log(filteredMeals)
        return filteredMeals; */
      }

      // Update seletedType state
const handleTypeChange = (event) => {
  setSelectedType(event.target.value);
};

const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  };

  if (filteredList == null){
    return <h1>Loading...</h1>
  }

    return (
      <>
        <div className="MealsListPage">
        <h1>Today's Meals</h1>

        <div className="Meals-Filter">
        <div className="Meals-Filter-Type">
          <h3>Filter by meal type:</h3>
            <br/>
            <select
              id="type-input"
              value={selectedType}
              onChange={handleTypeChange}>
              <option value="">All</option>
              <option value="snack">Snack</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
          <br />
          </div>
          <div className="Meals-Filter-Company">
          <h3>Filter by company:</h3>
            <br/>
            <select
              id="type-input"
              value={selectedCompany}
              onChange={handleCompanyChange}>
              <option value="">All</option>
              <option value="Netflix">Netflix</option>
              <option value="IronHack">IronHack</option>
              <option value="Microsoft">Microsoft</option>
              <option value="TooGoodToGo">TooGoodToGo</option>
            </select>
            </div>
        </div>
         
       <section>   
            {renderMeals()}
        </section>
        {/* 
        <div>
          {filteredList.map((item, index) => (
            <div className="item" key={index}>
            <div className="name">{`Name: ${item.type}`}</div>
            <div className="title">{`Title: ${item.title}`}</div>
       </div>    
    ))} */}
    </div>
    </> 
  );
}

export default MealsListPage;
