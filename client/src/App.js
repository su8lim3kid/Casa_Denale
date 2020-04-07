import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Policy from './components/Policy';
import Rooms from './components/Rooms';
import Navbar from './components/NavBar';
import { Container, } from "semantic-ui-react";

const App = () => (
 <>
 <Navbar />
   <Container>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/about" component={About} />
       <Route path="/gallery" component={Gallery} />
       <Route path="/booking" component={Booking} />
       <Route path="/contact" component={Contact} />
       <Route path="/policy" component={Policy} />
       <Route path="/rooms" component={Rooms} />
       <Route component={NoMatch} />
     </Switch>
   </Container>
 </>
);

export default App;