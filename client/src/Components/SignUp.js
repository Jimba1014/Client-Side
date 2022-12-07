import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import React, {useState} from 'react';
import Alert from 'react-bootstrap/Alert';

function SignUp(){

    const [companyPass, setCompanyPass] = useState("")
    const [newFirstName, setNewFirstName] = useState("")
    const [newLastName, setNewLastName] = useState("")
    const [newUserName, setNewUserName] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [correctComp, setCorrectComp] = useState(false)
    const [errors, setErrors] = useState([]);

    let navigate = useNavigate()

    function backToLogin(){
        navigate('/')
    }

    function handleComp(){
        setCorrectComp(true)
    }

    function handleOnSignUp(e){
        e.preventDefault()
        const newSpecialist = {
            first_name: newFirstName,
            last_name: newLastName,
            username: newUserName,
            password: newPassword
        }
        if(companyPass === "1234"){
            fetch('/signup', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newSpecialist)
            }).then((r) => {
                if(r.ok){
                    navigate('/')
                } else {
                    r.json().then((err) => setErrors(err.errors))
                }
            })
        } else {
            handleComp()
        }
        
    }

    const incorrectComp = <Alert variant='danger'> Please Enter the Correct Company Password </Alert>

    return(
        <div className='formContainer'>
            <h4>Create your Account</h4>
            <Form onSubmit={handleOnSignUp}>
                <Form.Group className="mb-3">
                    <Form.Label>Company Password</Form.Label>
                    <Form.Control 
                        type="password"
                        onChange = {(e) => setCompanyPass(e.target.value)}
                        placeholder="Enter First Name"
                        id='compPass' />
                </Form.Group>
                {correctComp ? incorrectComp : null }
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter First Name"
                        onChange = {(e) => setNewFirstName(e.target.value)}
                        id='firstName'/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Last Name"
                        onChange = {(e) => setNewLastName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Create A User Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter new Username"
                        onChange = {(e) => setNewUserName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange = {(e) => setNewPassword(e.target.value)}/>
                </Form.Group>
                <div><Alert variant='info'> <b>Warning:</b> Once You Sign Up You Will be Asked to Log Back in Again With your new Account</Alert></div>
                {errors? <div className='errors'>{errors} </div>:null}
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
            <h5>Oops! I Already Have an Account!</h5>
            <Button variant="primary" onClick={backToLogin}>
                Back to Login
            </Button>
        </div>
    )
}

export default SignUp