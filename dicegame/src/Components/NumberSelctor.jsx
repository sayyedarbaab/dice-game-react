// import React, { useState } from 'react'
import styled from 'styled-components'

function NumberSelctor({selectNum,setSelectNum,error,setError}) {
    const arrayNum=[1,2,3,4,5,6]
    console.log(selectNum)

    const numberSelctorHandler=(value)=>{
      setSelectNum(value);
      setError("");
    }
  return (
    <NumberSelctorContainer>
    <p className='error'>{error}</p>
    <div className='flex'>
    {
        arrayNum.map((value ,i) =>(
            <Box
            isSelected={value === selectNum}
            key={i}
            onClick={()=>numberSelctorHandler(value)}>
            {value}
            </Box>
        ))
    }
    </div>
    <p>Select Number</p>
    </NumberSelctorContainer>
  )
}

export default NumberSelctor

const Box=styled.div`
height:60px;
width:60px;
border:1px solid black;
display:grid;
place-items:center;
font-size:24px;
font-weight:700;
color:white;
cursor:pointer;
background:${(props)=> (props.isSelected ? "black":"white")};
color:${(props)=> (!props.isSelected ? "black":"white")};
gap:20px;
border-radius:15px;
`

const NumberSelctorContainer=styled.div`
  display:flex;
  flex-direction:column;
  align-items:end;  
 .flex{
  display:flex;
  gap:24px;
 }
 p{
  font-size:24px;
  font-weight:700px;
 }
 .error{
  color:red;
 }
`