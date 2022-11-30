import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavBar({currentUser, updateUser}){

  const handleLogOut = () => {
      fetch(`/logout`, {
        method:"DELETE"
      })
      .then(res =>{
        if(res.ok){
          updateUser(false)
        }
      })
    }

    return(
        <>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Client-Side</Navbar.Brand>
            {currentUser? <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Appointments</Nav.Link>
              <Nav.Link href="#pricing">Home Visits</Nav.Link>
              <Nav.Link href="#pricing">Manage Clients</Nav.Link>
            </Nav>: null}
            {currentUser? <Button variant="secondary" onClick={handleLogOut}>Logout</Button>: null}
          </Container>
        </Navbar>
      </>
    )
}

export default NavBar