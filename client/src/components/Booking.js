import React from 'react'
import  Container  from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Booking() {
  
  return (
    <>
    <style>{'body { background-color: #fcf6e6; }'}</style>
     <p style = {{fontSize:'40px'}}> Booking Page Soon</p>

     <Container>
     <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
     </Container>
    </>
  )
}

export default Booking
