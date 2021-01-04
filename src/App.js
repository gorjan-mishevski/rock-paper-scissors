import Scoreboard from "./components/scoreboard";
import Board from "./components/board";
import Rules from "./components/rules";
import Match from "./components/match";
import * as React from "react";

export const hands = {
  rock: "rock",
  paper: "paper",
  scissors: "scissors",
};

function App() {
  const [playerSelectedHand, setPlayerSelectedHand] = React.useState(undefined);
  const [score, setScore] = React.useState(0);
  const [showBoard, setShowBoard] = React.useState(true);

  const handleOnSelectHand = (selectedHand) => {
    setPlayerSelectedHand(selectedHand);
  }

  const handleOnScoreUpdate = (newScore) => {
    if (score + newScore < 0) {
      return 0;
    }
    setScore(score + newScore);
  }

  return (
    <div className="px-8 pt-8 h-screen">
      <Scoreboard score={score}/>
      {showBoard === true ? (
        <Board handleOnSelectHand={handleOnSelectHand} setShowBoard={setShowBoard}/>
      ) : <Match playerSelectedHand={playerSelectedHand} handleOnScoreUpdate={handleOnScoreUpdate}
                 setShowBoard={setShowBoard}/>}
      <Rules/>
    </div>
  );
}

export default App;
