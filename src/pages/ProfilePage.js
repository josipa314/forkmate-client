import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { useEffect, useState } from "react";
import axios from "axios";

function ProfilePage(props) {

  const {user} = useContext(AuthContext);
  const [companies, setCompany] = useState([]);

  useEffect(() => {
    fetchCompany();
  }, []);



  const fetchCompany= () => {
    axios.get(`${process.env.REACT_APP_API_URL}/companies`)
      .then(response => {
        //console.log(response.data);
        setCompany(response.data);
        console.log(response.data)
      })
      .catch(e => console.log("error getting companies from API...", e))
  }

/*   const details = companies.find((element) => {
    return element._id == user.company;
 }) */



    return (
      
        <div className="ProfilePage-Container">
        <h1>Your Profile</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
       {/*  <p>Company: {details.name}</p> */}

        

         
            {companies.map((element) => {
            if (user.company == element._id) 
            console.log(element)
            return (
          <>
          <p>Company: {element.name}</p>
          <p>City: {element.city}</p>

          </>) 

         
           }
           )} 
         

{/* 
         {user.company == companies._id &&
         <> 
         <p>Company: {companies.name}</p>
          <p>City: {companies.city}</p>

         </> } */}

         
         
        
       


        
  <button>
    <a href="/">Back</a>
  </button>
        </div>
      
    );
  }
  
  export default ProfilePage;