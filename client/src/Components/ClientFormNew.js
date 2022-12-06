import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, {useEffect, useState } from "react"

function ClientFormNew( {currentUser, doctors, rbts, strategies} ){


    const [newName, setNewName] = useState("")
    const [newRbt, setNewRbt] = useState("")
    const [newDoctor, setNewDoctor] = useState("")
    const [newStrategy, setNewStrategy] = useState("")
    const [newParent1, setNewParent1] = useState("")
    const [newParent2, setNewParent2] = useState("")
    const [newStatus, setNewStatus] = useState("")
    const [newHomeAddress, setNewHomeAddress] = useState("")
    const [newSchoolAddress, setNewSchoolAddress] = useState("")

    const individualDoctor = doctors.map( singleDoc => {
        return <option value={singleDoc.id} key={singleDoc.id}>{singleDoc.name}</option>
    })

    const individualRbt = rbts.map( singleRbt => {
        return <option value={singleRbt.id} key={singleRbt.id}> {`${singleRbt.first_name} ${singleRbt.last_name}`}</option>
    })

    const individualStrat = strategies.map( singleStrat => {
        return <option value={singleStrat.id} key={singleStrat.id}>{singleStrat.name}</option>
    })

    function handleClientSubmit(e){
        e.preventDefault()
        const newClient = {
            name: newName,
            specialist_id: currentUser.id,
            rbt_id: parseInt(newRbt),
            doctor_id: parseInt(newDoctor),
            strategy_id: parseInt(newStrategy),
            parent_first: newParent1,
            parent_second: newParent2,
            parental_status: newStatus,
            home_address: newHomeAddress,
            school_address: newSchoolAddress
        }
        console.log(newClient)
    }



    return(
        <div className='formContainer2'>
            <h2>New Client</h2>
            <Form onSubmit={handleClientSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter full legal name"
                        onChange={(e) => {setNewName(e.target.value)} }/>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Label>Rbt</Form.Label>
                    <Form.Select 
                        defaultValue="Choose..."
                        onChange={(e) => {setNewRbt(e.target.value)} }>
                        <option>Choose...</option>
                        {individualRbt}
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>Doctor</Form.Label>
                    <Form.Select 
                        defaultValue="Choose..."
                        onChange={(e) => {setNewDoctor(e.target.value)} }>
                        <option>Choose...</option>
                        {individualDoctor}
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>Strategy</Form.Label>
                    <Form.Select
                        defaultValue="Choose..."
                        onChange={(e) => {setNewStrategy(e.target.value)} }>
                        <option>Choose...</option>
                        {individualStrat}
                    </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Label>Parent 1</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Parent Full Name'
                        onChange={(e) => {setNewParent1(e.target.value)} }/>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>Parent 2</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Parent 2 Full Name'
                        onChange={(e) => {setNewParent2(e.target.value)} }/>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Label>Parental Status</Form.Label>
                    <Form.Control
                        placeholder="Together, Devorced, deceased parent, etc..."
                        onChange={(e) => {setNewStatus(e.target.value)} }/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>School Address</Form.Label>
                    <Form.Control
                        placeholder="Full School Address"
                        onChange={(e) => {setNewSchoolAddress(e.target.value)} }/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Home Address</Form.Label>
                    <Form.Control
                        placeholder="Full Home Address"
                        onChange={(e) => {setNewHomeAddress(e.target.value)} }/>
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    )
}

export default ClientFormNew