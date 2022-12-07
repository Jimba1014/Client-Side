
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useState } from "react"

function EditClientForm({editClient, doctors, rbts, strategies, currentUser, updateClient}){

    const [clientObj, setClientObj] = useState({})

    const onChangeHandler = (e) => {
        setClientObj({ ...clientObj, [e.target.name]: e.target.value})
    }

    const individualDoctor = doctors.map( singleDoc => {
        return <option value={singleDoc.id} key={singleDoc.id}>{singleDoc.name}</option>
    })

    const individualRbt = rbts.map( singleRbt => {
        return <option value={singleRbt.id} key={singleRbt.id}> {`${singleRbt.first_name} ${singleRbt.last_name}`}</option>
    })

    const individualStrat = strategies.map( singleStrat => {
        return <option value={singleStrat.id} key={singleStrat.id}>{singleStrat.name}</option>
    })

    function handleClientEditSubmit(e){
        fetch(`/clients/${editClient.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(clientObj)
        }).then((r) => r.json())
        .then((data) => {
            updateClient(data)
        })
        console.log(clientObj)

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
                        defaultValue={editClient.name}
                        onChange={onChangeHandler}
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                    <Form.Label>Rbt</Form.Label>
                    <Form.Select 
                        onChange={onChangeHandler}
                        defaultValue="Choose..."
                        name="rbt_id"
                        >
                        <option>Choose...</option>
                        {individualRbt}
                        
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>Doctor</Form.Label>
                    <Form.Select 
                        onChange={onChangeHandler}
                        defaultValue="Choose..."
                        name="doctor_id"
                        >
                        <option>Choose...</option>
                        {individualDoctor}
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>Strategy</Form.Label>
                    <Form.Select
                        onChange={onChangeHandler}
                        defaultValue="Choose..."
                        name="strategy_id"
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
                        onChange={onChangeHandler}
                        />
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>Parent 2</Form.Label>
                    <Form.Control
                        type='text'
                        name="parent_second"
                        placeholder='Parent 2 Full Name'
                        defaultValue={editClient.parent_second}
                        onChange={onChangeHandler}
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
                        onChange={onChangeHandler}
                        />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>School Address</Form.Label>
                    <Form.Control
                        type='text'
                        name="school_address"
                        placeholder="Full School Address"
                        defaultValue={editClient.school_address}
                        onChange={onChangeHandler}
                        />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Home Address</Form.Label>
                    <Form.Control
                        type='text'
                        name="home_address"
                        placeholder="Full Home Address"
                        defaultValue={editClient.home_address}
                        onChange={onChangeHandler}
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