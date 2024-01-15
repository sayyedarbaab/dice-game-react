import React from 'react'
import TotalScore from './TotalScore'
import NumberSelctor from './NumberSelctor'
import styled from 'styled-components'
import DiceRole from './DiceRole';
import { useState } from 'react';
import { Button } from '../styles/Button';
import Rules from './Rules';

function GamePlay() {
  const [score,setScore]=useState(0);
  const [selectNum,setSelectNum]=useState();
  const [currentDice,setCurrentDice]=useState(1);
  const [error,setError]=useState("");
  const [showRules,setShowRules]=useState(false)

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

  const resetAllGame=()=>{
    setScore(0);
    setSelectNum();
    setCurrentDice(1);
  }
  const showRuleBtn=()=>{
    setShowRules(true);
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
    <div className='btns'>
    <Button className='btnReset' onClick={resetAllGame}>Reset</Button>
    <Button onClick={showRuleBtn}>Show Rules</Button>
    </div>
    {showRules && <Rules />}
    <p className='copyRight'>©2024 SayyedArbaab All Rights Reserved</p>
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
.btns{
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-right:70px;
  margin-top:10px; 
}
.btnReset{
  background:white;
  color:black;
  border: solid black 2px;
}
.copyRight{
  text-align:center;
  margin-right:70px;
}
`
