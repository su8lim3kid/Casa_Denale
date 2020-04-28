import React from "react"
import { NavLink, } from "react-router-dom"
import { Menu, Segment, Sticky, } from 'semantic-ui-react'
import Logo from './../images/MainLogo.png'
import styled from 'styled-components'


const Navbar  = () =>


<Sticky>
  <Segment inverted>
      <Menu inverted pointing secondary >
        <Menu.Item >
          <NavLink
            exact
            to="/"
            activeStyle={styles.active}>
            Home
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            exact
            to="/about"
            activeStyle={styles.active}>
            About
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            to="/gallery"
            activeStyle={styles.active}>
            Gallery
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            to="/rooms"
            activeStyle={styles.active}>
            Rooms
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            to="/booking"
            activeStyle={styles.active}>
            Book Now
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            to="/contact"
            activeStyle={styles.active}>
            Contact Us
          </NavLink>
        </Menu.Item>
      </Menu>
      <NavLink to="/">
   <Img src={Logo} alt='logo' /> 
   </NavLink>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          width: '50%',
          
        }}>
      </div>
      </div>  
  
        
    </Segment>
    </Sticky>
   
   



  
   const Img = styled.img`
   position: absolute;
   top: -4px;
   right: 10px;
   height: 100px;
   width: 140px;
 `
      
const styles = {
  active: {
    color: '#11D9DC',
    fontWeight: 'bold',
  }
}
export default Navbar


