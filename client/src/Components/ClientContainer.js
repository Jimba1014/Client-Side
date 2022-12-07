import ClientCard from "./ClientCard"
import ClientFormNew from "./ClientFormNew"
import NewDoctorForm from './NewDoctorForm';
import NewRbtForm from './NewRbtForm';
import NewStrategyForm from './NewStrategyForm';
import EditClientForm from "./EditClientForm";
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
    const [editFormOpen, setEditFormOpen] = useState(false)

    const [doctors, setDoctors] = useState([])
    const [rbts, setRbts] = useState([])
    const [strategies, setStrategies] = useState([])
    const [editClient, setEditClient] = useState([])

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

    useEffect(() => {
      fetch(`/doctors`)
      .then((res) => res.json())
      .then((data) => setDoctors(data))
    },[])

    useEffect(() => {
        fetch(`/rbts`)
        .then((res) => res.json())
        .then((data) => setRbts(data))
    },[])

    useEffect(() => {
        fetch(`/strategies`)
        .then((res) => res.json())
        .then((data) => setStrategies(data))
    },[])

    function handleClientEditFormInput(id){
        fetch(`/clients/${id}`)
        .then((res) => res.json())
        .then((data) => setEditClient(data))
    }

    function updateClient(updatedClient){
      const upClient = client.map((singleClient) => {
        if(singleClient.id === updatedClient.id){
          return updatedClient
        } else {
          return singleClient
        }
      })
    }


    function deleteClient(deletedClient){
      const updatedClients = client.filter((singleClient) => singleClient.id !== deletedClient.id)
      setClient(updatedClients)
    }

    const individualClient = client?.map( student => {
      if (student.specialist.id === currentUser.id) {
        return <ClientCard
          client={student}
          key={student.id}
          currentUser={currentUser}
          deleteClient={deleteClient}
          handleEditFormOpen={handleEditFormOpen}
          handleClientEditFormInput={handleClientEditFormInput}/>
      }
    }
        )

    function addNewDoctor(newDoctorObj){
      setDoctors(prev => [...prev, newDoctorObj])
    }

    function addNewRbt(newRbtObj){
      setRbts(prev => [...prev, newRbtObj])
    }

    function addNewStrategy(newStratObj){
      setStrategies(prev => [...prev, newStratObj])
    }

    function addNewClient(newClientObj){
      setClient(prev => [...prev, newClientObj])
    }

    function handleDoctorFormOpen(){
      setNewDoctorOpen(prev => !prev)
      setNewRbtOpen(false)
      setNewStrategyOpen(false)
      setNewClientOpen(false)
      setEditFormOpen(false)
    }

    function handleRbtFormOpen(){
      setNewRbtOpen(prev => !prev)
      setNewDoctorOpen(false)
      setNewStrategyOpen(false)
      setNewClientOpen(false)
      setEditFormOpen(false)
    }

    function handleNewStratFormOpen(){
      setNewStrategyOpen(prev => !prev)
      setNewDoctorOpen(false)
      setNewRbtOpen(false)
      setNewClientOpen(false)
      setEditFormOpen(false)
    }

    function handleNewClientFormOpen(){
      setNewClientOpen(prev => !prev)
      setNewDoctorOpen(false)
      setNewRbtOpen(false)
      setNewStrategyOpen(false)
      setEditFormOpen(false)
    }

    function handleEditFormOpen(){
      setEditFormOpen(prev => !prev)
      setNewDoctorOpen(false)
      setNewRbtOpen(false)
      setNewStrategyOpen(false)
      setNewClientOpen(false)
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

    return(
        <div className="entireContainer">
          <div className="editContainer">
            <Card>
              <Card.Header as="h5">Edit Clients</Card.Header>
              <div className="editCard">
                <div className="clientButtons">
                <Button variant="outline-primary" onClick={handleDoctorFormOpen}>Add New Doctor</Button>{' '}
                <Button variant="outline-primary" onClick={handleRbtFormOpen}>Add New Rbt</Button>{' '}
                <Button variant="outline-primary" onClick={handleNewStratFormOpen}>Add New Strategy</Button>{' '}
                <Button variant="outline-primary" onClick={handleNewClientFormOpen}>Add New Client</Button>{' '}
                </div>
              </div>
              <div>
                {newDoctorOpen? <NewDoctorForm 
                  setNewDoctorOpen={setNewDoctorOpen}
                  addNewDoctor = {addNewDoctor}/> : null}
                {newRbtOpen? <NewRbtForm 
                  setNewRbtOpen={setNewRbtOpen}
                  addNewRbt = {addNewRbt}/>: null}
                {newStrategyOpen? <NewStrategyForm
                  setNewStrategyOpen={setNewStrategyOpen}
                  addNewStrategy ={addNewStrategy}/>: null}
                {newClientOpen? <ClientFormNew 
                  currentUser={currentUser}
                  doctors={doctors}
                  rbts={rbts}
                  strategies={strategies}
                  addNewClient={addNewClient}
                  setNewClientOpen={setNewClientOpen}/>: null }
                {editFormOpen? <EditClientForm 
                    editClient={editClient}
                    doctors={doctors}
                    rbts={rbts}
                    strategies={strategies}
                    currentUser={currentUser}
                    updateClient={updateClient}/> : null}
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