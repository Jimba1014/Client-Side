import Form from 'react-bootstrap/Form';

function HomeApptFormNew(){
    return(
        <div className='formContainer'>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Client</Form.Label>
                    <Form.Select>
                        <option>Client</option>
                    </Form.Select>
                    <Form.Group className="mb-3">
                        <Form.Label>Date/Time</Form.Label>
                        <Form.Control type="datetime-local"/>
                    </Form.Group>
                </Form.Group>
            </Form>
        </div>
    )
}

export default HomeApptFormNew