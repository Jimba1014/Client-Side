import SpecialistClientCard from "./SpecialistClientCard"
import SpecialistClientTable from "./SpecialistClientTable"
import Table from 'react-bootstrap/Table';
import React, {useEffect, useState } from "react"

function SpecialistContainer({currentUser}){

  const [specialist, setSpecialist] = useState([])
  const [client, setClient] = useState([])


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
        return <SpecialistClientCard client={student} key={student.id}/>
      }
    }
        )

    const clientTableEntries = client?.map( student => {
      if (student.specialist.id === currentUser.id) {
        return <SpecialistClientTable client={student} key={student.id}/>
      }
    }
        )

    return(
      <div className="entireContainer">
        {currentUser ? <h1>Welcome {currentUser?.first_name}!</h1> : null}
        <div className="specialistContainer">
          {individualClient}
        </div>
      <div className="table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan={3}>Clients</th>
            </tr>
            <tr>
              <th>Client Name</th>
              <th>Regestered Behavioral Technician</th>
              <th>Current Doctor</th>
            </tr>
          </thead>
          <tbody>
            {clientTableEntries}
          </tbody>
        </Table>
      </div>
    </div>
    )
}

export default SpecialistContainer