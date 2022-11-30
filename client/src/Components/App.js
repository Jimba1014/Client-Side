import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Login from "./Login";
import SignUp from "./SignUp";
import SpecialistContainer from "./SpecialistContainer";
import ClientContainer from "./ClientContainer";
import HomeApptContainer from "./HomeApptContainer";
import SchoolApptContainer from "./SchoolApptContainer";


function App() {
  const [currentUser, setCurrentUser] = useState(false)

  const updateUser = (user) => setCurrentUser(user)


  return (
    <div className="App">
      <NavBar currentUser={currentUser} updateUser={updateUser}/>
      {currentUser ? <div>Welcome {currentUser.first_name}!</div> : null}
      <Login updateUser={updateUser}/>
      <SignUp/>
      <SpecialistContainer/>
      <ClientContainer/>
      <HomeApptContainer/>
      <SchoolApptContainer/>
    </div>
  );
}

export default App;
