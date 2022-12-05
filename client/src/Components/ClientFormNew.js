import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function ClientFormNew(){
    return(
        <div className='formContainer2'>
            <h2>New Client</h2>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter full legal name" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Label>Rbt</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>Doctor</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>Strategy</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Label>Parent 1</Form.Label>
                    <Form.Control type='text' placeholder='Parent Full Name' />
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>Parent 2</Form.Label>
                    <Form.Control type='text' placeholder='Parent 2 Full Name' />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Label>Parental Status</Form.Label>
                    <Form.Control placeholder="Together, Devorced, deceased parent, etc..." />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>School Address</Form.Label>
                    <Form.Control placeholder="Full School Address" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Home Address</Form.Label>
                    <Form.Control placeholder="Full Home Address" />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default ClientFormNew