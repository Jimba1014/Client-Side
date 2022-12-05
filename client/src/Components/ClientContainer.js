import ClientCard from "./ClientCard"
import ClientFormNew from "./ClientFormNew"
import NewDoctorForm from './NewDoctorForm';
import NewRbtForm from './NewRbtForm';
import NewStrategyForm from './NewStrategyForm';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {useEffect, useState } from "react"

function ClientContainer( {currentUser}){

    const [specialist, setSpecialist] = useState([])
    const [client, setClient] = useState([])
    const [newDoctorOpen, setNewDoctorOpen] = useState(false)
    const [newRbtOpen, setNewRbtOpen] = useState(false)
    const [newStrategyOpen, setNewStrategyOpen] = useState(false)
    const [newClientOpen, setNewClientOpen] = useState(false)

    useEffect(() => {
        fetch(`/specialists/${currentUser.id}`)
        .then((res) => res.json())
        .then((data) => setSpecialist(data))
      },[currentUser])
  
      useEffect(() => {
        fetch(`/clients`)
        .then((res) => res.json())
        .then((data) => setClient(data))
      },[])

      const individualClient = client?.map( student => {
        if (student.specialist.id === currentUser.id) {
          return <ClientCard client={student} key={student.id} currentUser={currentUser}/>
        }
      }
          )
      
      function handleDoctorFormOpen(){
        setNewDoctorOpen(prev => !prev)
        setNewRbtOpen(false)
        setNewStrategyOpen(false)
        setNewClientOpen(false)


      }

      function handleRbtFormOpen(){
        setNewRbtOpen(prev => !prev)
        setNewDoctorOpen(false)
        setNewStrategyOpen(false)
        setNewClientOpen(false)
      }

      function handleNewStratFormOpen(){
        setNewStrategyOpen(prev => !prev)
        setNewDoctorOpen(false)
        setNewRbtOpen(false)
        setNewClientOpen(false)
      }

      function handleNewClientFormOpen(){
        setNewClientOpen(prev => !prev)
        setNewDoctorOpen(false)
        setNewRbtOpen(false)
        setNewStrategyOpen(false)
      }

  
    return(
        <div className="entireContainer">
          <div className="editContainer">
            <Card>
              <Card.Header>Edit Clients</Card.Header>
              <div className="editCard">
                <div>
                <Button variant="outline-primary" onClick={handleDoctorFormOpen}>Add New Doctor</Button>{' '}
                <Button variant="outline-primary" onClick={handleRbtFormOpen}>Add New Rbt</Button>{' '}
                <Button variant="outline-primary" onClick={handleNewStratFormOpen}>Add New Strategy</Button>{' '}
                <Button variant="outline-primary" onClick={handleNewClientFormOpen}>Add New Client</Button>{' '}
                </div>
              </div>
              <div>
                {newDoctorOpen? <NewDoctorForm/> : null}
                {newRbtOpen? <NewRbtForm/>: null}
                {newStrategyOpen? <NewStrategyForm/>: null}
                {newClientOpen? <ClientFormNew/>: null }
              </div>
            </Card>
          </div>
          <div className="clientsContainer">
            {individualClient}
          </div>
        </div>
    )
}

export default ClientContainer