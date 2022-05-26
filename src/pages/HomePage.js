import "../App.css"
import "./HomePage.css"
import { NavLink } from "react-router-dom";
import logo from "../assets/logo spining.png"
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import background from "../assets/cafeteria-zone.jpg";

function HomePage() {

  const {isLoggedIn, user, logOutUser} = useContext(AuthContext);

    return (
      <>
        <div className="HomePage-Container"
       style={{ backgroundImage: `url(${background})` }}>

       
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
          
        
       

              

              { isLoggedIn &&
                <>
                     <p>Hey there, {user.name} </p>  
                     <h1>Welcome back to ForkMate!</h1>
                    
                </>
            }

            { !isLoggedIn &&
                <>
                <h1>Welcome to ForkMate!</h1>
                </>  
            }
          <br/>
          <br/>
          <br/>
              <img src={logo} className="App-logo" alt="logo"/>
              <br/>
              <br/>
              <br/>
              <br/>
              <p>Make friends at work and fight foodwaste</p>

              { isLoggedIn &&
                <>
                    
                     <button onClick={logOutUser}>Logout</button>  
                    
                </>
            }

            { !isLoggedIn &&
                <>
                    {/* <NavLink to="/signup">Register</NavLink> |  */} */
                   <li><NavLink to="/login">Login</NavLink></li>
                </>
            }


             
             
             
              
        </div>
      </>
    );
  }
  
  export default HomePage;