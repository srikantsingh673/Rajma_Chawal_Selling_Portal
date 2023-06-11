import React from 'react'
import { Card, Button } from 'react-bootstrap'
import tick from '../Assets/tick.png'

const Result = () => {
    return (
        <div className='result'><br/><br/><br/><br/><br/><br/>
            <Card>
                <Card.Body>
                    <img
                        src={tick}
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    /><br/><br/>
                    <Card.Title className='title-result'> Order placed successfully</Card.Title><br/><br/><br/>
                    <Button className='sch-button'href='/'> Home </Button>
                </Card.Body>
            </Card><br/><br/><br/><br/><br/><br/>
        </div>
    )
}

export default Result