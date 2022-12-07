import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from 'react-bootstrap/Alert';

function Login({updateUser}){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  let navigate = useNavigate()


  function onSubmit(e){
    e.preventDefault();
    const user = {
      username,
      password,
    }
    fetch('/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
    .then(r => {
      if(r.ok){
        r.json().then(user => {
          navigate('/home')
          updateUser(user)
        })
      } else {
        r.json().then(json => setErrors(json.errors))
      }
    })
  }

  function goToSignup(){
    navigate('/signup')
  }



    return (
      <div className='formContainer'>
        <h4>Please Log into your Account</h4>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" placeholder="Enter UserName" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
      {/* {errors ? <div><Alert variant='danger'>{errors}</Alert></div> : null} */}
      {errors? <div className='errors'>{errors}</div>:null}
      <h5>Are You New to the Company?</h5>
      <Button variant="primary" onClick={goToSignup}>Create a new Account</Button>
      </div>
    )
}

export default Login