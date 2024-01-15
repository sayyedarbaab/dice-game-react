import styled from "styled-components"

export const Button=styled.button`
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
margin-bottom: 25px;
border: 1px solid transparent;
transition: 0.4s background ease-in;
cursor:pointer;

&:hover{
    background-color:white;
    border: 1px solid black;
    color:black;
    transition: 0.3s background ease-in;
}
`