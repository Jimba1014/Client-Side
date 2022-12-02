import HomeApptFormNew from "./HomeApptFormNew"
import HomeApptTable from "./HomeApptTable"
import Table from 'react-bootstrap/Table';
import React, {useEffect, useState } from "react"

function HomeApptContainer({currentUser}){

    const [specialist, setSpecialist] = useState([])
    const [hAppointment, setHAppointment] = useState([])

    useEffect(() => {
        fetch(`/specialists/${currentUser.id}`)
        .then((res) => res.json())
        .then((data) => setSpecialist(data))
    },[currentUser])

    useEffect(() => {
        fetch(`/h_appointments`)
        .then((res) => res.json())
        .then((data) => setHAppointment(data))
    },[])

    const individualHAppt = hAppointment?.map( happ => {
        if (happ?.specialist.id === currentUser.id) {
            return <HomeApptTable happ={happ} key={happ.id}/>
        }
    })

    return(
        <div className="apptContainer">
            <Table striped>
                <thead>
                    <tr>
                    <th>Client Name</th>
                    <th>Appointment Time</th>
                    <th>Home Address</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {individualHAppt}
                </tbody>
            </Table>
            
            <HomeApptFormNew currentUser={currentUser}/>
        </div>
    )
}

export default HomeApptContainer