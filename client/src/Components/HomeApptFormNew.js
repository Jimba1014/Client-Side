import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react"

function HomeApptFormNew( {currentUser, hAppointments, addNewHAppointment}){


    const [newDate, setNewDate ] = useState("")
    const [newHAppClient, setNewHAppClient] = useState("")
    const [errors, setErrors] = useState([]);


    const individualHApptOption = hAppointments && hAppointments?.map((singleHAppt) => {
        if (singleHAppt.specialist.id === currentUser.id) {
        return <option key={singleHAppt.id} value={singleHAppt.id}>{singleHAppt?.client.name}</option>}
    }

        )

        function handleHApptSubmit(e){
            e.preventDefault()
            const newHAppt = {
                client_id: parseInt(newHAppClient),
                specialist_id: currentUser.id,
                date_time: newDate
            }
            fetch('/h_appointments', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newHAppt)
            }).then((r) => {
                if(r.ok) {
                    r.json().then((data) => {
                        addNewHAppointment(data)
                        console.log(newHAppt)
                    })
                } else {
                    r.json().then((err) => setErrors(err.errors))
                }
            })
        }
    return(
        <div className='formContainer'>
            <Form onSubmit={handleHApptSubmit} >
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Client</Form.Label>
                    <Form.Select onChange={(e) => {setNewHAppClient(e.target.value)} } >
                        <option>Select...</option>
                        {individualHApptOption}
                    </Form.Select>
                    <Form.Group className="mb-3">
                        <Form.Label>Date/Time</Form.Label>
                        <Form.Control type="datetime-local" value={newDate} onChange={(e) => {setNewDate(e.target.value)} } />
                    </Form.Group>
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
            {errors? <div>{errors}</div>:null}
        </div>
    )
}

export default HomeApptFormNew