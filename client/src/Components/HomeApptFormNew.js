import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, {useEffect, useState } from "react"

function HomeApptFormNew( {currentUser}){

    const [hAppointment, setAppointment] = useState([])
    const [newDate, setNewDate ] = useState("")
    const [newHAppClient, setNewHAppClient] = useState("")

    useEffect(() => {
        fetch(`/appointments`)
        .then((res) => res.json())
        .then((data) => setAppointment(data))
    },[])

    const individualHApptOption = hAppointment && hAppointment?.map((singleHAppt) => {
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
            console.log(newHAppt)
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
        </div>
    )
}

export default HomeApptFormNew