
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState } from "react"

function EditClientForm({editClient, doctors, rbts, strategies, currentUser}){

    const [editName, setEditName] = useState("")
    const [editRbt, setEditRbt] = useState("")
    const [editDoctor, setEditDoctor] = useState("")
    const [editStrategy, setEditStrategy] = useState("")
    const [editParent1, setEditParent1] = useState("")
    const [editParent2, setEditParent2] = useState("")
    const [editStatus, setEditStatus] = useState("")
    const [editHomeAddress, setEditHomeAddress] = useState("")
    const [editSchoolAddress, setEditSchoolAddress] = useState("")
    const [errors, setErrors] = useState([])

    const individualDoctor = doctors.map( singleDoc => {
        return <option value={singleDoc.id} name="doctor_id" key={singleDoc.id}>{singleDoc.name}</option>
    })

    const individualRbt = rbts.map( singleRbt => {
        return <option value={singleRbt.id} name="rbt_id" key={singleRbt.id}> {`${singleRbt.first_name} ${singleRbt.last_name}`}</option>
    })

    const individualStrat = strategies.map( singleStrat => {
        return <option value={singleStrat.id} name="strategy_id" key={singleStrat.id}>{singleStrat.name}</option>
    })

    function handleClientEditSubmit(e){
        e.preventDefault()
        const editedClient = {
            name: editName,
            specialist_id: currentUser.id,
            rbt_id: parseInt(editRbt),
            doctor_id: parseInt(editDoctor),
            strategy_id: parseInt(editStrategy),
            parent_first: editParent1,
            parent_second: editParent2,
            parental_status: editStatus,
            home_address: editHomeAddress,
            school_address: editSchoolAddress,
        }
        console.log(editedClient)
    }

    return(
        <div className="formContainer2">
            <h2>Edit {editClient.name}</h2>
            <Form onSubmit={handleClientEditSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter full legal name"
                        defaultValue={editClient.name}
                        onChange={(e) => {setEditName(e.target.value)} }
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Label>Rbt</Form.Label>
                    <Form.Select 
                        onChange={(e) => {setEditRbt(e.target.value)} }
                        defaultValue="Choose..."
                        >
                        <option>Choose...</option>
                        {individualRbt}
                        
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>Doctor</Form.Label>
                    <Form.Select 
                        onChange={(e) => {setEditDoctor(e.target.value)} }
                        defaultValue="Choose..."
                        >
                        <option>Choose...</option>
                        {individualDoctor}
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>Strategy</Form.Label>
                    <Form.Select
                        onChange={(e) => {setEditStrategy(e.target.value)} }
                        defaultValue="Choose..."
                        >
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
                        name="parent_first"
                        placeholder='Parent Full Name'
                        defaultValue={editClient.parent_first}
                        onChange={(e) => {setEditParent1(e.target.value)} }
                        />
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>Parent 2</Form.Label>
                    <Form.Control
                        type='text'
                        name="parent_second"
                        placeholder='Parent 2 Full Name'
                        defaultValue={editClient.parent_second}
                        onChange={(e) => {setEditParent2(e.target.value)} }
                        />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3">
                    <Form.Label>Parental Status</Form.Label>
                    <Form.Control
                        type='text'
                        name="parental_status"
                        placeholder="Together, Devorced, deceased parent, etc..."
                        defaultValue={editClient.parental_status}
                        onChange={(e) => {setEditStatus(e.target.value)} }
                        />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>School Address</Form.Label>
                    <Form.Control
                        type='text'
                        name="school_address"
                        placeholder="Full School Address"
                        defaultValue={editClient.school_address}
                        onChange={(e) => {setEditSchoolAddress(e.target.value)} }
                        />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Home Address</Form.Label>
                    <Form.Control
                        type='text'
                        name="home_address"
                        placeholder="Full Home Address"
                        defaultValue={editClient.home_address}
                        onChange={(e) => {setEditHomeAddress(e.target.value)} }
                        />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default EditClientForm