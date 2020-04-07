import React from 'react';
import { Link, } from 'react-router-dom';
import { Menu, } from "semantic-ui-react";

const Navbar = () => (
 <Menu>
   <Link to="/">
     <Menu.Item>
       Home
     </Menu.Item>
   </Link>
   <Link to="/about">
     <Menu.Item>
       About
     </Menu.Item>
   </Link>
   <Link to="/gallery">
     <Menu.Item>
       Gallery
     </Menu.Item>
   </Link>
   <Link to="/rooms">
     <Menu.Item>
       Rooms
     </Menu.Item>
   </Link>
   <Link to="/booking">
     <Menu.Item>
       Booking
     </Menu.Item>
   </Link>
   {/* <Link to="/policy">
     <Menu.Item>
       Policy
     </Menu.Item>
   </Link> */}
   {/* policy will go on bottom nav */}
   <Link to="/contact">
     <Menu.Item>
      Contact Us
     </Menu.Item>
   </Link>
 </Menu>
)

export default Navbar;