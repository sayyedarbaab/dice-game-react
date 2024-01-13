import React from 'react'
import styled from 'styled-components'

function StartGame({toggle}) {
  return (
    <Container>
      <img src='images/game.png' alt='dice'/>
      <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame



const Container=styled.div`
max-width:1180px;
margin-top: 50px;
margin:0 auto;
display:flex;
align-items:center;
height: 90vh;

.content {
    h1{
        font-size:96px;
    }
}
`;
const Button=styled.button`
display:flex;
flex-direction:column;
justify-content:center;
padding:10px 18px;
gap:10px;
width:220px;
height:44px;
border-radius:15px;
background:black;
color:white;
font-size:30px;
align-items:center;
margin-bottom: 60px;
border: 1px solid transparent;
transition: 0.4s background ease-in;
cursor:pointer;

&:hover{
    background-color:white;
    border: 1px solid black;
    color:black;
    transition: 0.3s background ease-in;
}
`;
