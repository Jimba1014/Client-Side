import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, {useEffect, useState } from "react"


function SchoolApptFormNew( {currentUser, appointments, addNewAppointment}){

 
    const [newDate, setNewDate ] = useState("")
    const [newAppClient, setNewAppClient] = useState("")
    const [errors, setErrors] = useState([]);

    // const individualApptOption = appointments && appointments?.map((singleAppt) => {
    //     if (singleAppt.specialist.id === currentUser.id) {
    //     return <option key={singleAppt.client.id} value={singleAppt.client.id}>{singleAppt?.client.name}</option>}
    // }

    //     )
    
        const individualApptOption2 = currentUser.clients && currentUser.clients.map((singleAppt) => {
            return <option key={singleAppt.id} value={singleAppt.id}>{singleAppt?.name}</option>
        })

    function handleApptSubmit(e){
        e.preventDefault()
        const newAppt = {
            client_id: parseInt(newAppClient),
            specialist_id: currentUser.id,
            date_time: newDate
        }
        fetch("appointments", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newAppt)
        }).then((r) => {
            if(r.ok) {
                r.json().then((data) => {
                    addNewAppointment(data)
                    console.log(newAppt)
                })
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }




    return(
        <div className='formContainer'>
            <Form onSubmit={handleApptSubmit} >
            <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledSelect">Client</Form.Label>
                <Form.Select onChange={(e) => {setNewAppClient(e.target.value)} } >
                    <option>Select...</option>
                    {individualApptOption2}
                </Form.Select>
                <Form.Group className="mb-3">
                    <Form.Label>Date/Time</Form.Label>
                    <Form.Control type="datetime-local" value={newDate} onChange={(e) => {setNewDate(e.target.value)} } />
                </Form.Group>
            </Form.Group>
            <Button type="submit">Submit</Button>
            </Form>
            {errors? <div className='errors'>{errors}</div>:null}
        </div>
    )
}

export default SchoolApptFormNew