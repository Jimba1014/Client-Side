
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ClientCard({client, currentUser}){

    return(
        <Card>
        <Card.Header as="h5">{client?.name}</Card.Header>
        <Card.Body>
          <Card.Title>Specialist</Card.Title>
          <Card.Text>
            {currentUser.first_name} {currentUser.last_name}
          </Card.Text>
          <Card.Title>RBT</Card.Title>
          <Card.Text>{client.rbt.first_name} {client.rbt.last_name}</Card.Text>
          <Button variant="primary">Edit Client Information</Button>{'   '}
          <Button variant="danger">Delete Client</Button>
        </Card.Body>
      </Card>
    )
}

export default ClientCard