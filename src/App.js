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
import MyMealsPage from "./pages/MyMealsPage"
import IsPrivate from "./components/Private"
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [meals, setMeals] = useState(null);
  const [companies, setCompanies] = useState(null)

  useEffect(() => {
    fetchMeals();
  }, []);

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchMeals = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/meals`)
      .then(response => {
        //console.log(response.data);
        setMeals(response.data);
      })
      .catch(e => console.log("error getting meals from API...", e))
  }

  const fetchCompanies = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/companies`)
      .then(response => {
        //console.log(response.data);
        setCompanies(response.data);
      })
      .catch(e => console.log("error getting companies from API...", e))
  }


  return (
    <div className="App">

    <Navbar />

    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/meals' element={<MealsListPage meals={meals} companies = {companies} callbackCompanyList={fetchCompanies} callbackUpdateMealList={fetchMeals} />} />
      <Route path='/mymeals' element={<IsPrivate><MyMealsPage meals={meals} callbackUpdateMealList={fetchMeals}/></IsPrivate>} />
      <Route path='/meals/create' element={<IsPrivate><CreateMealPage callbackUpdateMealList={fetchMeals} /></IsPrivate>} />
      <Route path='/meals/:mealId/edit' element={<EditMealPage meals={meals}  callbackUpdateMealList={fetchMeals} />} />
      <Route path='/meals/:mealId' element={<MealDetailsPage  meals = {meals}/>}/>
      <Route path='/profilepage' element={<IsPrivate><ProfilePage/></IsPrivate>} />

      <Route path='/signup' element={<SignupPage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
    </div>
    );

}

export default App;
