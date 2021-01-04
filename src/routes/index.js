import Board from "../components/board";
import Match from "../components/match";

export const routes = {
  "/": (handleOnSelectHand) => <Board handleOnSelectHand={handleOnSelectHand}/>,
  "/match": (playerSelectedHand, handleOnScoreUpdate) => <Match playerSelectedHand={playerSelectedHand} handleOnScoreUpdate={handleOnScoreUpdate}/>
};