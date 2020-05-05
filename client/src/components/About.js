import React from 'react'
import styled from 'styled-components'
import beach from './../images/beach.jpg'


function About() {
  return (

    <>
     <AboutImg src={beach} alt='Beach' />  
     <Header>
       About Us
      </Header>   
    <style>{'body { background-color: #fcf6e6; }'}</style>
    <br/>
    <br/>
           <p style = {{fontSize:'20px'}}> About us
Welcome to Tulum! 
I’m native of Mexico, but raised both here and in the United States. At a young age my family migrated to the States, but I always knew I wanted to come back and give to my native country by providing work to the local natives. 
The idea of Casa Denale was born when me and my husband came to visit this quaint place with it’s beautiful turquoise Caribbean Sea, white & powdery beaches, gorgeous jungle, boutique hotels, cenotes, archeological sites, endless history, and welcoming and energetic atmosphere of the local people. 
Not to mention the colorful, aromatic, and delicious food and town.  We knew that this somewhat hidden gem, will be the perfect place to welcome all to this beautiful paradise. 
Tulum is known as “Pueblo Magico” tucked 2.5km away from the beach. It’s nearby quaint shops & previous mentioned attractions make this place a favorite for world travelers and aquatic enthusiasts. The coral reef is just 200 mts form the coast and it is the second largest in the world.  
Visit one of the seven Wonders of the World just 2 hours from here. The Yucatán Peninsula has so much to offer and satisfy all levels of vacationers. 
Casa Denale is more than a boutique hotel. It is place where people can stay and feel home away from home… “Mi Casa es su Casa”. 
It is a little residence with 6 bedrooms, king size bed, shower & bathroom and private terrace in each room.  A pool to cool off and relax after a long day of exploration of the town with lounge chairs and sitting area.
Join us for complementary happy hour every evening by sampling mezcal, tequila, beers and wines of traditional Yucatan Peninsula vendors. 
Bienvenidos a Casa Denale! 

</p>

    </>
  )
}

const AboutImg = styled.img`
 height: 500px;   
width: 100vw;
position: relative;
left: 50%;
right: 50%;
margin-left: -50vw;
margin-right: -50vw;
object-fit: cover;

`
const Header = styled.div`
  position: absolute;
  left: 0;
  top: 35%;
  width: 100%;
  text-align: center;
  font-size: 60px;
  color: white;
  font-family:Brushstroke, fantasy;
  color: #fcf6e6;
 
 `

export default About
