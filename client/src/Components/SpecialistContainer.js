import SpecialistClientCard from "./SpecialistClientCard"
import SpecialistClientTable from "./SpecialistClientTable"
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

      console.log(client)

      const individualClient = client?.map( student => {
        if (student.specialist.id === currentUser.id) {
          return <SpecialistClientCard client={student} key={student.id}/>
        }
      }

        )
    return(
        <div>
            {currentUser ? <h1>Welcome {currentUser?.first_name}!</h1> : null}
            {individualClient}
            <SpecialistClientTable/>
        </div>
    )
}

export default SpecialistContainer