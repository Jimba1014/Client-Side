import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, {useEffect, useState } from "react"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function SpecialistClientCard({client}){

    const [showText, setShowText] = useState(true)

    function showStrategy(){
        setShowText(r => !r)
    }

    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Client Strategy</Popover.Header>
          <Popover.Body>
            {client.strategy.description}
          </Popover.Body>
        </Popover>
      );

    return(
        <div>
            <Card style={{ width: '25rem'}} className="clientCard">
                <Card.Body>
                    <Card.Title>{client.name}</Card.Title>
                    <Card.Subtitle> Parents/Guardians: </Card.Subtitle>
                    <Card.Subtitle className="mb-1 text-muted">{client.parent_first}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{client.parent_second}</Card.Subtitle>
                    <Card.Subtitle> Parental Status</Card.Subtitle>
                    <Card.Subtitle className="mb-1 text-muted">{client.parental_status}</Card.Subtitle>
                    <Card.Text>
                    Sample Text
                    </Card.Text>
                    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                        <Button onClick={showStrategy} variant="outline-primary">{showText? " Show Strategy " : "Show Less"}</Button>
                    </OverlayTrigger>
                    <Card.Subtitle className='startingText'> Important Documents: </Card.Subtitle>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SpecialistClientCard