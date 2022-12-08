import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react"

function FileUpload({editClient}){

    const [file, setFile] = useState()

    function handleChange(e){
        setFile(e.target.files[0])
    }

    return(

        <div className='formContainer2'>
            <h2>File Upload for {editClient.name}</h2>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Choose a File</Form.Label>
                    <Form.Control 
                        type="file"
                        onChange={handleChange}
                        />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Upload
                </Button>
            </Form>
        </div>
    )
}

export default FileUpload