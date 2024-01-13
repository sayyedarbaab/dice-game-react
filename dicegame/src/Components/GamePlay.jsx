import React from 'react'
import TotalScore from './TotalScore'
import NumberSelctor from './NumberSelctor'
import styled from 'styled-components'
import DiceRole from './DiceRole';

function GamePlay() {
  return (
    <MainContainer>
    <div className='flex'>
    <TotalScore />
    <NumberSelctor />
    </div>
    <DiceRole />
    </MainContainer>
  );
}

export default GamePlay


const MainContainer=styled.main`
padding: 0px 30px 0px 30px;
.flex{
  display:flex;
  justify-content:space-between;
  align-items:end;
}
`
