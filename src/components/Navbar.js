import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import "./Navbar.css";

function Navbar(){

    const {isLoggedIn, isLoading, user, logOutUser} = useContext(AuthContext);

    return (
        <nav className="Navbar">
            <NavLink to="/">Home</NavLink> | 
            <NavLink to="/meals">Today's Meals</NavLink> | 
            <NavLink to="/meals/create">Add New Meal</NavLink> |||
            <NavLink to="/mymeals">My Meals</NavLink> |||
            
            { isLoggedIn &&
                <>
                    <span>Welcome, {user.name} </span> 
                    <button onClick={logOutUser}>Logout</button>
                </>
            }

            { !isLoggedIn &&
                <>
                    <NavLink to="/signup">Register</NavLink> | 
                    <NavLink to="/login">Login</NavLink>
                </>
            }
        </nav>
    );
}


export default Navbar;