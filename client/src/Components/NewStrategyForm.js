import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function NewStrategyForm(){
    return(
        <div className='formContainer2'>
            <h2>New Strategy</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Name of Strategy</Form.Label>
                    <Form.Control type="text" placeholder="Enter full name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description of Strategy</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter a detailed Description of this Strategy" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default NewStrategyForm