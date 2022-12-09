import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react"

function NewDoctorForm( {setNewDoctorOpen, addNewDoctor}){

    const [newName, setNewName] = useState("")
    const [newPracName, setNewPracName] = useState("")
    const [newAddress, setNewAddress] = useState("")
    const [errors, setErrors] = useState([])

    function handleDoctorSubmit(e){
        e.preventDefault()
        const newDoctor = {
            name: newName,
            practice: newPracName,
            address: newAddress
        }
        fetch('/doctors', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newDoctor)
        }).then((r) => {
            if(r.ok) {
                r.json().then((data) => {
                    addNewDoctor(data)
                    setNewDoctorOpen(false)
                })
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
        
    }


    return (
        <div className='formContainer2'>
            <h2>New Doctor</h2>
            <Form onSubmit={handleDoctorSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Doctor Full Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter full name"
                        onChange={(e) => {setNewName(e.target.value)} } />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Practice Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter the name of the doctors place of practice"
                        onChange={(e) => {setNewPracName(e.target.value)} } />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Practice Address</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter the address of the doctors place of practice"
                        onChange={(e) => {setNewAddress(e.target.value)} } />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {errors? <div className='errors'>{errors}</div>:null}
        </div>
    )

}

export default NewDoctorForm