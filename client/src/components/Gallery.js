import React from 'react'
import  Container  from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import tulum2 from './../images/tulum2.jpg'
import king from './../images/king.png'
import dq from './../images/DQ.png'
import villa from './../images/villa.png'
import fp1 from './../images/FP1.jpg'
import fp2 from './../images/FP2.jpg'

function Gallery() {
  return (
    <>
    <style>{'body { background-color: #fcf6e6; }'}</style>
     <p style = {{fontSize:'40px'}}>Gallery</p>

     <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src= {dq} rounded height='350px' width='350px'/>
    </Col>
    <Col xs={6} md={4}>
      <Image src={tulum2}rounded height='350px' width='350px'/>
    </Col>
    <Col xs={6} md={4}>
      <Image src={king} rounded height='350px' width='350px'/>
    </Col>
  </Row>
  <br />
  <Row>
    <Col xs={6} md={4}>
      <Image src= {villa} rounded height='350px' width='350px'/>
    </Col>
    <Col xs={6} md={4}>
      <Image src={fp1}rounded height='350px' width='350px'/>
    </Col>
    <Col xs={6} md={4}>
      <Image src={fp2} rounded height='350px' width='350px'/>
    </Col>
  </Row>
  <Row>
    <Col xs={6} md={4}>
      <Image src= {dq} rounded height='350px' width='350px'/>
    </Col>
    <Col xs={6} md={4}>
      <Image src={tulum2}rounded height='350px' width='350px'/>
    </Col>
    <Col xs={6} md={4}>
      <Image src={king} rounded height='350px' width='350px'/>
    </Col>
  </Row>
  <br />
  <Row>
    <Col xs={6} md={4}>
      <Image src= {villa} rounded height='350px' width='350px'/>
    </Col>
    <Col xs={6} md={4}>
      <Image src={fp1}rounded height='350px' width='350px'/>
    </Col>
    <Col xs={6} md={4}>
      <Image src={fp2} rounded height='350px' width='350px'/>
    </Col>
  </Row>
</Container>
    </>
  )
}

export default Gallery
