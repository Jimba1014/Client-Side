import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, {useEffect, useState } from "react"

function HomeApptFormNew( {currentUser}){

    const [appointment, setAppointment] = useState([])

    useEffect(() => {
        fetch(`/appointments`)
        .then((res) => res.json())
        .then((data) => setAppointment(data))
    },[])

    const individualHApptOption = appointment && appointment?.map((studentApp) => {
        if (studentApp.specialist.id === currentUser.id) {
        return <option key={studentApp.id}>{studentApp?.name}</option>}
    }

        )
    return(
        <div className='formContainer'>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="disabledSelect">Client</Form.Label>
                    <Form.Select>
                        <option>Select...</option>
                        {individualHApptOption}
                    </Form.Select>
                    <Form.Group className="mb-3">
                        <Form.Label>Date/Time</Form.Label>
                        <Form.Control type="datetime-local"/>
                    </Form.Group>
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export default HomeApptFormNew