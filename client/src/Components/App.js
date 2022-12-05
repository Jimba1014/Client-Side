import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import SignUp from "./SignUp";
import SpecialistContainer from "./SpecialistContainer";
import ClientContainer from "./ClientContainer";
import HomeApptContainer from "./HomeApptContainer";
import SchoolApptContainer from "./SchoolApptContainer";


function App() {
  const [currentUser, setCurrentUser] = useState(false)
  const [errors, setErrors] = useState(false)

  const updateUser = (user) => setCurrentUser(user)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setCurrentUser(user));
      }
    }).then(() => {
      fetch(`/specialists/${currentUser.id}`)
     .then(res => {
        if(res.ok){
          res.json().then(user => {
              setCurrentUser(user)
            })
        }else {
            res.json().then(data => setErrors(data.error))
        }
    })
    })
  }, []);



  return (
    <div className="App">
      <NavBar currentUser={currentUser} updateUser={updateUser} testVariable setTestVariable/>
      <Routes>
        <Route exact path= "/" element={<Login updateUser={updateUser}/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/home" element={<SpecialistContainer currentUser={currentUser} clients={currentUser?.clients}/>}/>
        <Route path="/Clients" element={<ClientContainer currentUser={currentUser}/>}/>
        <Route path="/Appointments" element={<SchoolApptContainer currentUser={currentUser} clients={currentUser?.clients} />}/>
        <Route path="/Home_Visits" element={<HomeApptContainer 
          currentUser={currentUser}/>}/>
      </Routes>
    </div>
  );
}

export default App;
