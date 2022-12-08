
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ClientCard({client, currentUser, deleteClient, handleEditFormOpen, handleClientEditFormInput, handleFileUploadOpen}){

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

  function handleButtonFileUploadOpen(){
    handleFileUploadOpen()
    handleClientEditFormInput(client.id)
  }

    return(
        <Card className='clientCards'>
        <Card.Header as="h3">{client?.name}</Card.Header>
        <Card.Body>
          <Card.Title>Specialist</Card.Title>
          <Card.Text>
            {currentUser.first_name} {currentUser.last_name}
          </Card.Text>
          <Card.Title>RBT</Card.Title>
            <Card.Text>{client.rbt.first_name} {client.rbt.last_name}</Card.Text>
          <Card.Title>Doctor</Card.Title>
          <Card.Text>{client.doctor.name}</Card.Text>
          <Card.Title>Home Address:</Card.Title>
            <Card.Text>{client.home_address}</Card.Text>
          <Card.Title>School Address:</Card.Title>
            <Card.Text>{client.school_address}</Card.Text>
          <Button variant="primary" onClick={testFunction}>Edit Client Information</Button>{'   '}
          <Button variant="info" onClick={handleButtonFileUploadOpen}>Add a file</Button>{'   '}
          <Button variant="danger" onClick={handleDeleteClient}>Delete Client</Button>
        </Card.Body>
      </Card>
    )
}

export default ClientCard