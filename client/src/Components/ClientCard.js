
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ClientCard({client, currentUser, deleteClient, handleEditFormOpen, handleClientEditFormInput}){

  function handleDeleteClient(){
    fetch(`/clients/${client.id}`, {
      method: "DELETE"
    })
    deleteClient(client)
  }

  function testFunction(){
    handleEditFormOpen()
    handleClientEditFormInput(client.id)
  }

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
          <Button variant="primary" onClick={testFunction}>Edit Client Information</Button>{'   '}
          <Button variant="danger" onClick={handleDeleteClient}>Delete Client</Button>
        </Card.Body>
      </Card>
    )
}

export default ClientCard