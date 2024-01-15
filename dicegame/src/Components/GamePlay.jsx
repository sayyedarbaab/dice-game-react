import React from 'react'
import TotalScore from './TotalScore'
import NumberSelctor from './NumberSelctor'
import styled from 'styled-components'
import DiceRole from './DiceRole';
import { useState } from 'react';

function GamePlay() {
  const [score,setScore]=useState(0);
  const [selectNum,setSelectNum]=useState();
  const [currentDice,setCurrentDice]=useState(1);
  const [error,setError]=useState("");

  const generateRandomNumber= (min,max) => {
    console.log(Math.floor(Math.random() * (max-min) + min));
    return Math.floor(Math.random() * (max-min) + min);
  };

  const roleDice=()=>{
    if(!selectNum){
      setError("You Have not Selected any Number");
      return;
    };
    const randomNumber=generateRandomNumber(1,7);
    setCurrentDice((prev)=>randomNumber)
    

    if(selectNum === randomNumber){
      setScore((prev) => prev + randomNumber);
    }else{
      setScore((prev)=> prev - 2)
    }
    setSelectNum(undefined);
  }
  return (
    <MainContainer>
    <div className='flex'>
    <TotalScore score={score}
    />
    <NumberSelctor 
                  error={error}
                  setError={setError}
                  selectNum={selectNum}
                  setSelectNum={setSelectNum}
    />
    </div>
    <DiceRole currentDice={currentDice}
              roleDice={roleDice}
    />
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
