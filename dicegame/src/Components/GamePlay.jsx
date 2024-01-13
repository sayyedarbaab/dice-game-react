import React from 'react'
import TotalScore from './TotalScore'
import NumberSelctor from './NumberSelctor'
import styled from 'styled-components'

function GamePlay() {
  return (
    <MainContainer>
    <div className='flex'>
    <TotalScore />
    <NumberSelctor />
    </div>
    </MainContainer>
  );
}

export default GamePlay


const MainContainer=styled.main`
.flex{
  display:flex;
  justify-content:space-between;
  align-items:end;
}
`
