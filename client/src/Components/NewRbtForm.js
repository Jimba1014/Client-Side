import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react"

function NewRbtForm({ setNewRbtOpen }){

    const [newFirstName, setNewFirstName] = useState("")
    const [newLastName, setNewLastName] = useState("")

    function handleRbtSubmit(e){
        e.preventDefault()
        const newRbt = {
            first_name: newFirstName,
            last_name: newLastName
        }
        console.log(newRbt)
        setNewRbtOpen(false)
    }

    return(
        <div className='formContainer2'>
            <h2>New Rbt</h2>
            <Form onSubmit={handleRbtSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter name"
                        onChange={(e) => {setNewFirstName(e.target.value)} } />
                    <Form.Text className="text-muted">
                    Please make sure to use their legal name.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter last name"
                        onChange={(e) => {setNewLastName(e.target.value)} } />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default NewRbtForm

