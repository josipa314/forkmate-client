import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import "./Navbar.css";

function Navbar(){

    const {isLoggedIn, isLoading, user, logOutUser} = useContext(AuthContext);

    return (
        <nav className="Navbar">
            <NavLink to="/">Home</NavLink> | 
            <NavLink to="/meals">Meals of Today</NavLink> | 
            <NavLink to="/meals/create">New Meal</NavLink> |||
            <NavLink to="/mymeals">My Meals</NavLink> |||
            
            { isLoggedIn &&
                <>
                    <span>Welcome, {user.email} </span> 
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