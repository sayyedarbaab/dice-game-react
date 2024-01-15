import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/Button';

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
max-width:1080px;
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
