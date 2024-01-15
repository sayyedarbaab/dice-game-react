import React from 'react'
import styled from 'styled-components'

function Rules() {
  return (
    <RulesContainer>
    <h2>Select any Number</h2>    
    <div className='text'>
    <p>Click on Dice Image</p>
    <p>after click on dice if selected number is equal to dice number you will get same point as Dice{""}</p>
    <p>if you get wrong guess then 2 point will be dedcuted</p>  
    </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer=styled.div`
    background-color: #FBF1F1;
    padding:20px;
    width:70%;
    margin:0 auto;
    margin-top:30px;
    h2{
        font-size:24px;
    }
    .text{
        margin-top:24px;

    }
`