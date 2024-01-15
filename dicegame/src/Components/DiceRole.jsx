import styled from 'styled-components'

function DiceRole({currentDice,roleDice}) {

  return (
    <DiceContainer>
    <div className='dice' onClick={roleDice}>
    <img src={`images/${currentDice}.png`} alt='dice 1'/>
    </div>
    <h1>Click on Dice to Roll</h1>
    </DiceContainer>
  );
};

export default DiceRole

const DiceContainer=styled.div`

.dice{
    cursor:pointer;
}
margin-top:48px;
display:flex;
flex-direction:column;
align-items:center;
margin-top:60px;
img{
    width:60%;
}
h1{
    margin-right:65px;
}
`
