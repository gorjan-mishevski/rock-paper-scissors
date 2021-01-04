import {hands} from "../App";

const getGameStatus = (playerHand, houseHand) => {
  if (playerHand === hands.rock) {
    if (houseHand === hands.rock) {
      return matchStatus.staleMate;
    }
    if (houseHand === hands.paper) {
      return matchStatus.houseWon;
    }
    if (houseHand === hands.scissors) {
      return matchStatus.playerWon;
    }
  }

  if (playerHand === hands.scissors) {
    if (houseHand === hands.rock) {
      return matchStatus.houseWon;
    }
    if (houseHand === hands.paper) {
      return matchStatus.playerWon;
    }
    if (houseHand === hands.scissors) {
      return matchStatus.staleMate;
    }
  }

  if (playerHand === hands.paper) {
    if (houseHand === hands.rock) {
      return matchStatus.playerWon;
    }
    if (houseHand === hands.paper) {
      return matchStatus.staleMate;
    }
    if (houseHand === hands.scissors) {
      return matchStatus.houseWon;
    }
  }

  return "No match";
};

const updateScore = (gameMatchStatus) => {
  if (gameMatchStatus === matchStatus.playerWon) {
    return 1;
  } else if (gameMatchStatus === matchStatus.houseWon) {
    return -1;
  } else {
    return 0;
  }
};

const matchStatus = {
  playerWon: "playerWon",
  houseWon: "houseWon",
  staleMate: "staleMate"
}

export const Game = {
  getGameStatus,
  updateScore,
  matchStatus
};
