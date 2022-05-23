import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function ProfilePage(props) {

  const {user} = useContext(AuthContext);

  console.log(user)

    return (
      <>
        <div className="ProfilePage-Container">
        <h1>Your Profile</h1>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Company: {user.company}</p>
        
       


        
  <button>
    <a href="/">Back</a>
  </button>
        </div>
      </>
    );
  }
  
  export default ProfilePage;