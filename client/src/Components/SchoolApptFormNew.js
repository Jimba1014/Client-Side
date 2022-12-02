import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, {useEffect, useState } from "react"


function SchoolApptFormNew( {currentUser}){

    const [appointments, setAppointments] = useState([])
    const [newDate, setNewDate ] = useState("")
    const [newAppClient, setNewAppClient] = useState("")

    useEffect(() => {
        fetch(`/h_appointments`)
        .then((res) => res.json())
        .then((data) => setAppointments(data))
    },[])

    const individualApptOption = appointments && appointments?.map((singleAppt) => {
        if (singleAppt.specialist.id === currentUser.id) {
        return <option key={singleAppt.client.id} value={singleAppt.client.id}>{singleAppt?.client.name}</option>}
    }

        )

    function handleApptSubmit(e){
        e.preventDefault()
        const newAppt = {
            client_id: parseInt(newAppClient),
            specialist_id: currentUser.id,
            date_time: newDate
        }
        console.log(newAppt)
    }




    return(
        <div className='formContainer'>
            <Form onSubmit={handleApptSubmit} >
            <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledSelect">Client</Form.Label>
                <Form.Select onChange={(e) => {setNewAppClient(e.target.value)} } >
                    <option>Select...</option>
                    {individualApptOption}
                </Form.Select>
                <Form.Group className="mb-3">
                    <Form.Label>Date/Time</Form.Label>
                    <Form.Control type="datetime-local" value={newDate} onChange={(e) => {setNewDate(e.target.value)} } />
                </Form.Group>
            </Form.Group>
            <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default SchoolApptFormNew