import React  from 'react'
import { Accordion, Container, Icon } from 'semantic-ui-react'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import styled from 'styled-components'
import tulum from './../images/tulum.jpg'
import tulum2 from './../images/tulum2.jpg'
import king from './../images/king.png'
import dq from './../images/DQ.png'
import villa from './../images/villa.png'
import fp1 from './../images/FP1.jpg'
import fp2 from './../images/FP2.jpg'
import '../stylesheet/home.css'
import { NavLink, } from "react-router-dom"

class Home extends React.Component {

  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }
  render() {
    const { activeIndex } = this.state
    return (
      <>
      
    <style>{'body { background-color: #fcf6e6; }'}</style>
           
      <HImg src={tulum} alt='Tulum' /> 
      <Header>
        Welcome to Casa Denale
      </Header>
      <NavLink to='/booking'>
  <BookButton> 
  <Button variant="warning" size="lg">
      Book Now
    </Button>{' '}
    </BookButton>
    </NavLink>
    <br/>
    <br/>
    <br/>

      <Container>
        
          <p style={{fontSize: '18px'}}>
          With only 6 Rooms, Casa Denale is an intimate 4 star jewel, furnished with care and elegance. Our guests can totally relax under the Palapa or Poolside and enjoy the peace and tranquility that this beautiful place offers.
      Casa Santiago is located in Tulum in the residential neighborhood of La Veleta, a serene and peaceful area surrounded by nature. Casa Santiago is only 1.5 Km from Tulum´s centre and 5.5 Km from the beach.  The Tulum Parque Nacional is 3.8 Km from the property. Holistika Park is just 200 mt away. Here the guests can practice yoga, meditation, it’s an oasis of relax and nature, with a lot of routes, natural pool and temazcal (typical Maya’s sauna with sacred rite).
      
          </p>
        
      <Accordion>
       
        

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Read More
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p style={{fontSize: '18px'}}>
          Overlooking the sun Terrace and Pool, each Room of Casa Santiago is furnished with a local wood, a king size bed and a single sofa bed, an outdoor Patio with table and chairs. High quality bed linen imported from Italy, a laptop safe, LED TV, Fan and inverter air-conditioning.
      Bathroom with rainfall shower, hair dryer and amenities. We offer a daily cleaning service.
      We offer the option of a sweet italian style breakfast from 8am till 11am. The beakfast includes: Coffe, tea, cappuccino, expresso, natural orange juice, homemade cakes and marmalades, cereals, cookies, toast, yogurt, seasonal fruits, milk, peanut butter, honey, nutella.
      Free wi-fi in Rooms and common areas. Free private parking.
      Swimming pool with large solarium and sun loungers.
      We are available to our guests during their permanence in Casa Santiago, we try to solve any request, we help you to plan a tour or transfer to the airport.
      Check-in is from 3 pm until 9 pm. We ask our guests to inform us about their arrival time.
          </p>
        </Accordion.Content>
      </Accordion>
  </Container>

  <br/>
  <hr/>

  <CardDeck>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src= {king} style={{height: '280px'}}vv />
  <Card.Body>
    <Card.Title>SUITE KING</Card.Title>
    <Card.Text>
      Audentes fortuna iuvat.
    </Card.Text>
    <NavLink to='/rooms'>
    <Button variant="primary" >Room Details</Button>
    </NavLink>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src= {dq} style={{height: '280px'}} />
  <Card.Body>
    <Card.Title>DOUBLE QUEEN</Card.Title>
    <Card.Text>
      Audentes fortuna iuvat.
    </Card.Text>
    <NavLink to='/rooms'>
    <Button variant="primary" >Room Details</Button>
    </NavLink>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src= {villa} style={{height: '280px'}}/>
  <Card.Body>
    <Card.Title>THE VILLA</Card.Title>
    <Card.Text>
      Audentes fortuna iuvat.
    </Card.Text>
    <NavLink to='/rooms'>
    <Button variant="primary" >Room Details</Button>
    </NavLink>
  </Card.Body>
</Card>
</CardDeck>

<br />
<br />
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fp1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={tulum2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fp2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



  {/* <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src= {king} />
  <Card.Body>
    <Card.Title>SUITE KING</Card.Title>
    <Card.Text>
      Audentes fortuna iuvat.
    </Card.Text>
    <Button variant="primary">Room Details</Button>
  </Card.Body>
</Card> */}



  </>
    )
  }
}
 const Header = styled.div`
  position: absolute;
  left: 0;
  top: 13%;
  width: 100%;
  text-align: center;
  font-size: 60px;
  color: white;
  font-family:cursive;
  color: #fcf6e6;
 
 `
    const HImg = styled.img`
    
    width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  `
 const BookButton = styled.div `
 
 position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
 `

export default Home
