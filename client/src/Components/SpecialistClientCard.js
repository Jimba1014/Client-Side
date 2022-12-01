import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, {useEffect, useState } from "react"

function SpecialistClientCard({client}){

    const [showText, setShowText] = useState(true)

    function showStrategy(){
        setShowText(r => !r)
    }


    return(
        <div>
            <Card style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title>{client.name}</Card.Title>
                    <Card.Subtitle> Parents/Guardians: </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{client.parent_first}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{client.parent_second}</Card.Subtitle>
                    <Card.Subtitle> Parental Status</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{client.parental_status}</Card.Subtitle>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button onClick={showStrategy} variant="outline-primary">{showText? " Show Strategy " : "Show Less"}</Button>{' '}
                    <Card.Subtitle> Important Documents: </Card.Subtitle>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SpecialistClientCard