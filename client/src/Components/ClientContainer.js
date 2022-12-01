import ClientCard from "./ClientCard"
import ClientFormNew from "./ClientFormNew"
import React, {useEffect, useState } from "react"

function ClientContainer( {currentUser}){

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
          return <ClientCard client={student} key={student.id}/>
        }
      }
          )
  
    return(
        <div>
            <div className="clientsContainer">
                {individualClient}
            </div>
            <ClientFormNew/>
        </div>
    )
}

export default ClientContainer