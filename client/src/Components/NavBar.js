import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavBar({currentUser, updateUser}){

  let navigate = useNavigate()

  const handleLogOut = () => {
      fetch(`/logout`, {
        method:"DELETE"
      })
      .then(res =>{
        if(res.ok){
          navigate('/')
          updateUser(false)
        }
      })
    }

    return(
        <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand>Client-Side</Navbar.Brand>
            {currentUser? <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/Appointments">Appointments</Nav.Link>
              <Nav.Link href="/Home_Visits">Home Visits</Nav.Link>
              <Nav.Link href="/Clients">Manage Clients</Nav.Link>
            </Nav>: null}
            {currentUser? <Button variant="secondary" to = "/" onClick={handleLogOut}>Logout</Button>: null}
          </Container>
        </Navbar>
      </>
    )
}

export default NavBar