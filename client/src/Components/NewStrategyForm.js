import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react"

function NewStrategyForm({setNewStrategyOpen}){

    const [newStratName, setNewStratName] = useState("")
    const [newDes, setNewDes] = useState("")


    function handleStrategySubmit(e){
        e.preventDefault()
        const newStrategy = {
            name: newStratName,
            description: newDes
        }
        console.log(newStrategy)
        setNewStrategyOpen(false)
    }
    return(
        <div className='formContainer2'>
            <h2>New Strategy</h2>
            <Form onSubmit={handleStrategySubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name of Strategy</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter full name" 
                        onChange={(e) => {setNewStratName(e.target.value)} }/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description of Strategy</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        placeholder="Enter a detailed Description of this Strategy"
                        onChange={(e) => {setNewDes(e.target.value)} } />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default NewStrategyForm