import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import "./Navbar.css"
import icon from "../assets/icon.png"

function Navbar(){

    const {isLoggedIn, isLoading, user, logOutUser} = useContext(AuthContext);

    return (
        <section className="top-nav">
        <div className="icon-container">
        <img src={icon} className="icon" alt="icon"/>
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
        <div className="menu-button"></div>
        </label>
          <ul class ="menu"> 
            <li> <NavLink to="/">Home</NavLink></li>
            <li> <NavLink to="/meals">Today's Meals</NavLink></li>
            <li> <NavLink to="/meals/create">Add New Meal</NavLink></li>
            
            
            <li className="left-side nav">
            { isLoggedIn &&
                <>
                    <span>Hey there, {user.name} </span> 
                    <NavLink to="/mymeals">My Meals</NavLink> | 
                    <NavLink to="/profilepage">Profile</NavLink> 
                    <button onClick={logOutUser}>Logout</button>
                    
                </>
            }

            { !isLoggedIn &&
                <>
                   {/*  <NavLink to="/signup">Register</NavLink> |  */}
                    <NavLink to="/login">Login</NavLink>
                </>
            }
            </li>
          </ul> 
        
        </section>
    );
}


export default Navbar;