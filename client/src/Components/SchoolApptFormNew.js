import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, {useEffect, useState } from "react"


function SchoolApptFormNew( {currentUser}){

    const [hAppointments, setHAppointments] = useState([])

    useEffect(() => {
        fetch(`/h_appointments`)
        .then((res) => res.json())
        .then((data) => setHAppointments(data))
    },[])

    const individualApptOption = hAppointments && hAppointments?.map((student) => {
        if (student.specialist.id === currentUser.id) {
        return <option key={student.id}>{student?.name}</option>}
    }

        )




    return(
        <div className='formContainer'>
            <Form>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledSelect">Client</Form.Label>
                <Form.Select>
                    <option>Select...</option>
                    {individualApptOption}
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

export default SchoolApptFormNew