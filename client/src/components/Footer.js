import React from 'react';
import { NavLink, } from "react-router-dom"

// import Devlogo from "./Images/devlabLogo.png";

class Footer extends React.Component {
  render() {
    return (
      <>
        <div
          class="ui inverted vertical footer segment"
          style={{
            fontSize: "75px",
            height: "40px",
            backgroundColor: "#121212",
            width: '100vw',
            bottom: "0",
            display: "flex",
            position: 'static',
            left: "0",
            alignItems: 'center',

          }}>
          
            {/* <img src={Devlogo} alt='Devpoint labs' style={{height: '150px',}}/> */}
            
            <h5
              class="ui center aligned inverted header"
              style={{ 
                color: "white" 
              }}>
              219 Rockledge St.
Hattiesburg, MS 39401 / 720-321-1234 /
              contact@CasaDenale.com
            </h5>
          </div>

          <div 
            class='ui inverted vertical footer segment' 
            style={{ height: '35px',
              justifyContent: 'flex-end',
              display: "flex", 
              
            }} >

            <div
              class='ui inverted vertical footer segment' 
              style={{
                bottom: '20px',
                margin: '5px 25px 5px 5px'
              }}>

              <h5> &copy; 2020 Casa Denale llc. 
                  {" "}
                  <NavLink
            exact
            to="/policy">
           Terms 
          </NavLink> 
                  {" "}
                 and  
                  {" "}
                  <NavLink
            exact
            to="/about">
            Policy
          </NavLink>
              </h5>
            </div>        
          </div>
      </>
    )
  }
}

export default Footer