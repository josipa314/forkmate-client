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
        <div className="HomePage-Container">
      {/*  style={{ backgroundImage: `url(${background})` }} */}

       
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
                     <p className="welcome-phrase">Hey there, {user.name} </p> 
                     <br/> 
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
             
              <p className="slogan">Make friends at work and fight foodwaste</p>
              <br/>
              <br/>

{/* 
            { !isLoggedIn &&
                <>   
                  <li><NavLink to="/login"><button>Login</button></NavLink></li>
                </>
            }
 */}

             
             
             
              
        </div>
      </>
    );
  }
  
  export default HomePage;