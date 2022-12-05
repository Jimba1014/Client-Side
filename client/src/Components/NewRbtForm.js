import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function NewRbtForm(){

    return(
        <div className='formContainer2'>
            <h2>New Rbt</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                    <Form.Text className="text-muted">
                    Please make sure to use their legal name.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default NewRbtForm

