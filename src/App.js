import axios from "axios";
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import MealsListPage from './pages/MealsListPage';
import { useEffect, useState } from "react";
import CreateMealPage from "./pages/CreateMealPage";
import EditMealPage from "./pages/EditMealPage";
import MealDetailsPage from "./pages/MealDetailsPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

function App() {

  const [meals, setMeals] = useState(null);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/meals`)
      .then(response => {
        console.log(response.data);
        setMeals(response.data);
      })
      .catch(e => console.log("error getting meals from API...", e))
  }


  return (
    <div className="App">

    <Navbar />

    <Routes>
      <Route path='/' element={<h1>Welcome to ForkMate!</h1>} />
      <Route path='/meals' element={<MealsListPage meals={meals} callbackUpdateMealList={fetchMeals} />} />
      <Route path='/meals/create' element={<CreateMealPage callbackUpdateMealList={fetchMeals} />} />
      <Route path='/meals/:mealId/edit' element={<EditMealPage meals={meals}  callbackUpdateMealList={fetchMeals} />} />
      <Route path='/meals/:mealId' element={<MealDetailsPage  meals = {meals}/>}/>

      <Route path='/signup' element={<SignupPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
    </div>
    );

}

export default App;
