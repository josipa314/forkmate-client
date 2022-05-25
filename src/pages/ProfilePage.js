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


    if (companies.length == 0) {
      return <h1>Loading...</h1>
    }

    return (
      
        <div className="ProfilePage-Container">
        <h1>Your Profile</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>

        <p>Company: {companies.find((element) => user.company == element._id).name}</p>
        <p>City: {companies.find((element) => user.company == element._id).city}</p> 


        

           

          
            
            

         
         
    
         

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