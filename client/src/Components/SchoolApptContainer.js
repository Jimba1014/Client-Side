import SchoolApptFormNew from "./SchoolApptFormNew"
import SchoolApptTable from "./SchoolApptTable"
import Table from 'react-bootstrap/Table';
import React, {useEffect, useState } from "react"

function SchoolApptContainer({ currentUser }){

    const [specialist, setSpecialist] = useState([])
    const [appointments, setAppointments] = useState([])


    useEffect(() => {
        fetch(`/specialists/${currentUser.id}`)
        .then((res) => res.json())
        .then((data) => setSpecialist(data))
    },[currentUser])
  
    useEffect(() => {
        fetch(`/appointments`)
        .then((res) => res.json())
        .then((data) => setAppointments(data))
    },[])


        const individualAppt = appointments?.map( app => {
        if (app?.specialist.id === currentUser.id) {
            // return console.log(app.id)
            return <SchoolApptTable app={app} key={app.id} deleteAppt={deleteAppt}/>
        }
    })

    function addNewAppointment(newApptObj){
        setAppointments(prev => [...prev, newApptObj])
    }

    function deleteAppt(deletedAppt){
        const updatedAppts = appointments.filter((app) => app.id !== deletedAppt.id);
        setAppointments(updatedAppts)
    }




    return(
        <div className="entireContainer">
            <div className="apptContainer">
                <h1>School Appointments</h1>
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
                <SchoolApptFormNew 
                    currentUser={currentUser}
                    appointments={appointments}
                    addNewAppointment={addNewAppointment}/>
            </div>
        </div>
    )
}

export default SchoolApptContainer