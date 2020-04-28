import React from 'react'
import styled from 'styled-components'
import tulum from './../images/tulum.jpg'
import '../stylesheet/home.css'




class Home extends React.Component {
  render() {
    return (
      <>
      
    <style>{'body { background-color: gray; }'}</style>
           
      <HImg src={tulum} alt='Tulum' /> 
      <Header>
        Welcome to Casa Denale
      
      </Header>
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
  font-size: 40px;
  color: white;
  font-family:cursive;
 
 `
    const HImg = styled.img`
    
    width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  `
 





export default Home
