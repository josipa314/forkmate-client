import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import React, {useState,useEffect} from "react";
import "./Navbar.css"
import icon from "../assets/icon.png"

function Navbar(){

    const {isLoggedIn, isLoading, user, logOutUser} = useContext(AuthContext);
    const [open , setOpen] = useState(true);
      
    useEffect(() => {
      if (!open){
        document.getElementById("close-button").click()
      }
        },[open]); 

    return (
        <section className="top-nav">
            <div className="icon-container">
                <NavLink onClick= {() => setOpen(false)} to="/" className="icon-mother"><img src={icon} className="icon" alt="icon" /></NavLink>
            </div>
        <input id="menu-toggle" type="checkbox" />
        <label onClick={()=> setOpen(true)} className='menu-button-container' id="close-button" for="menu-toggle">
        <div className="menu-button"></div>
        </label>
          <ul className ="menu"> 
            <li> <NavLink onClick= {() => setOpen(false)} to="/about">About Us</NavLink></li> 
            <li> <NavLink onClick= {() => setOpen(false)} to="/meals">Today's Meals</NavLink></li>
            <li> <NavLink onClick= {() => setOpen(false)} to="/meals/create">Add New Meal</NavLink></li>   
            
            { isLoggedIn &&
                <>
                    {/* <span>Hey there, {user.name} </span>  */}
                    <li> <NavLink onClick= {() => setOpen(false)} to="/mymeals">My Meals</NavLink></li>
                    <li>  <NavLink onClick= {() => setOpen(false)} to="/profilepage">Profile</NavLink> </li>
                    <li>  <button onClick={logOutUser}>Logout</button> </li>    
                </>
            }
            { !isLoggedIn &&
                <>
                   <li><NavLink onClick= {() => setOpen(false)} to="/login">Login</NavLink></li>
                   <li><NavLink onClick= {() => setOpen(false)} to="/signup">Register</NavLink></li>
                </>
            }      
          </ul> 
        </section>
    );
}

export default Navbar;