import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Navigate, useNavigate } from "react-router-dom";

function SignUp(){

    let navigate = useNavigate()

    function backToLogin(){
        navigate('/')
    }

    return(
        <div className='formContainer'>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Company Password</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
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