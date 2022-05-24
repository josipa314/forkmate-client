import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import "./Navbar.css";

import {Nav,Navbar,Container} from 'react-bootstrap';

function Navigationbar(){

    const {isLoggedIn, isLoading, user, logOutUser} = useContext(AuthContext);

    return (
        <Navbar bg="light" expand="lg">
           
                <nav className="Navbar">
                    <NavLink to="/">Home</NavLink> |
                    <NavLink to="/meals">Today's Meals</NavLink> |
                    <NavLink to="/meals/create">Add New Meal</NavLink> |||
                    <NavLink to="/mymeals">My Meals</NavLink> |||

                    {isLoggedIn &&
                        <>
                            <span>Welcome, {user.name} </span>
                            <NavLink to="/profilepage">Profile</NavLink>
                            <button onClick={logOutUser}>Logout</button>
                        </>}

                    {!isLoggedIn &&
                        <>
                            <NavLink to="/signup">Register</NavLink> |
                            <NavLink to="/login">Login</NavLink>
                        </>}
                </nav>
          
        </Navbar>
    );
}


export default Navigationbar;