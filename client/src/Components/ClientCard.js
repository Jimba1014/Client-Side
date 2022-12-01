import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ClientCard({client}){

    return(
        <Card>
        <Card.Header as="h5">{client?.name}</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Edit Client Information</Button>{'   '}
          <Button variant="danger">Delete Client</Button>
        </Card.Body>
      </Card>
    )
}

export default ClientCard