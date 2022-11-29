import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Login from "./Login";
import SignUp from "./SignUp";
import SpecialistContainer from "./SpecialistContainer";
import ClientContainer from "./ClientContainer";
import HomeApptContainer from "./HomeApptContainer";
import SchoolApptContainer from "./SchoolApptContainer";


function App() {
  const [count, setCount] = useState(0);
  // const [currentUser, setCurrentUser] = useState(false)

  // const updateUser = (user) => setCurrentUser(user)

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>
      <NavBar/>
      <Login/>
      <SignUp/>
      <SpecialistContainer/>
      <ClientContainer/>
      <HomeApptContainer/>
      <SchoolApptContainer/>
    </div>
  );
}

export default App;
