import SchoolApptFormNew from "./SchoolApptFormNew"
import SchoolApptTable from "./SchoolApptTable"
import Table from 'react-bootstrap/Table';
import React, {useEffect, useState } from "react"

function SchoolApptContainer({ currentUser }){

    const [specialist, setSpecialist] = useState([])
    const [appointment, setAppointment] = useState([])


    useEffect(() => {
        fetch(`/specialists/${currentUser.id}`)
        .then((res) => res.json())
        .then((data) => setSpecialist(data))
    },[currentUser])
  
    useEffect(() => {
        fetch(`/appointments`)
        .then((res) => res.json())
        .then((data) => setAppointment(data))
    },[])


    const individualAppt = appointment?.map( app => {
        if (app?.specialist.id === currentUser.id) {
            return <SchoolApptTable app={app} key={app.id}/>
        }
    })

    return(
        <div className="apptContainer">
            <Table striped>
                <thead>
                    <tr>
                    <th>Client Name</th>
                    <th>Appointment Time</th>
                    <th>School Address</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {individualAppt}
                </tbody>
            </Table>
            <SchoolApptFormNew currentUser={currentUser}/>
            

        </div>
    )
}

export default SchoolApptContainer