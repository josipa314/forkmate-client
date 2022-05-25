import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import "./Navbar.css";

function Navbar(){

    const {isLoggedIn, isLoading, user, logOutUser} = useContext(AuthContext);

    return (
        <nav className="Navbar">
          <ul> 
            <li> <NavLink to="/">Home</NavLink> | </li>
            <li> <NavLink to="/meals">Today's Meals</NavLink> | </li>
            <li> <NavLink to="/meals/create">Add New Meal</NavLink> ||| </li>
            <li> <NavLink to="/mymeals">My Meals</NavLink> |||</li>
            
            <li>
            { isLoggedIn &&
                <>
                    <span>Welcome, {user.name} </span> 
                    <NavLink to="/profilepage">Profile</NavLink> 
                    <button onClick={logOutUser}>Logout</button>
                    
                </>
            }

            { !isLoggedIn &&
                <>
                    <NavLink to="/signup">Register</NavLink> | 
                    <NavLink to="/login">Login</NavLink>
                </>
            }
            </li>
          </ul> 
        </nav>
    );
}


export default Navbar;