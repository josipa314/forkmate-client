import "../App.css"
import "./HomePage.css"
import { NavLink } from "react-router-dom";
import logo from "../assets/logo spining.png"
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import background from "../assets/brocolihello.png"

function HomePage() {

  const {isLoggedIn, user} = useContext(AuthContext);

    return (
      <>
        <div className="HomePage-Container">
    

              { isLoggedIn &&
                <>
                <img src={background} className="background-homepage" alt="background"/>
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