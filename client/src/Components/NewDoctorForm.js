import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NewDoctorForm(){


    return (
        <div className='formContainer2'>
            <h2>New Doctor</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Doctor Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter full name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Practice Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter the name of the doctors place of practice" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Practice Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter the address of the doctors place of practice" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )

}

export default NewDoctorForm