import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react"
import Alert from 'react-bootstrap/Alert';

function NewStrategyForm({setNewStrategyOpen, addNewStrategy}){

    const [newStratName, setNewStratName] = useState("")
    const [newDes, setNewDes] = useState("")
    const [errors, setErrors] = useState([])


    function handleStrategySubmit(e){
        e.preventDefault()
        const newStrategy = {
            name: newStratName,
            description: newDes
        }
        fetch('strategies', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newStrategy)
        }).then((r) => {
            if(r.ok) {
                r.json().then((data) => {
                    addNewStrategy(data)
                    setNewStrategyOpen(false)
                })
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
        
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
                {errors? <div className='errors'>{errors}</div>:null}
                {/* {errors? <div><Alert key='danger' variant='danger'>{errors}</Alert></div>:null} */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            
        </div>
    )
}

export default NewStrategyForm