import { useState } from "react";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";



function App() {
  const [gameStarted,setGameStarted]=useState(false)

  const toggleGameStart=()=>{
    setGameStarted((prev)=> !prev);
  };

  return (
    <div className="App">
    {
      gameStarted ? <GamePlay /> : <StartGame  toggle={toggleGameStart}/>
    }   
    </div>
  );
}

export default App;
