import React from 'react';
import Option from "./option";
import {hands} from "../App";
import {Game} from "../game-logic/game";

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Match({playerSelectedHand, handleOnScoreUpdate, setShowBoard}) {

  const [houseSelectedHand] = React.useState(() => {
    const handsKeys = Object.keys(hands);
    const randomSelection = getRandomIntInclusive(0, 2);
    return hands[handsKeys[randomSelection]];
  });

  const [gameStatus, setGameStatus] = React.useState(undefined);

  React.useEffect(() => {
    setTimeout(() => {
      const gameStatus = Game.getGameStatus(playerSelectedHand, houseSelectedHand);
      setGameStatus(gameStatus);
      handleOnScoreUpdate(Game.updateScore(gameStatus));
    }, 1000);
  }, [houseSelectedHand, playerSelectedHand]);

  return (
    <>
      <div className="mt-32 flex justify-around">
        <div>
          <div
            className={`flex flex-grow place-content-center ${gameStatus === Game.matchStatus.playerWon ? "selection-glow" : ""}`}>
            <Option name={playerSelectedHand}/>
          </div>

          <p className="uppercase mt-5 text-white text-center font-bold">
            You picked
          </p>
        </div>

        <div>
          <div
            className={`flex flex-grow place-content-center w-32 md:w-40 ${gameStatus === Game.matchStatus.houseWon ? "selection-glow" : ""}`}>
            {gameStatus === undefined ? (
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-rpc-dark-shadow"/>
            ) : (
              <Option name={houseSelectedHand}/>
            )}

          </div>

          <p className="uppercase mt-5 text-white text-center font-bold">
            The house picked
          </p>
        </div>
      </div>

      <div className={`flex flex-col my-24 text-5xl uppercase text-white font-bold text-center ${gameStatus === undefined ? "invisible" : ""}`}>
        <p>
          {gameStatus === Game.matchStatus.playerWon && "You Win"}
          {gameStatus === Game.matchStatus.houseWon && "You Loose"}
          {gameStatus === Game.matchStatus.staleMate && "Stale Mate"}
        </p>
        <div className="mt-3 px-32">
          <button className="text-base w-52 h-12 rounded-xl bg-white text-black uppercase text-rpc-dark font-bold"
                  onClick={() => setShowBoard(true)}>
            Play Again
          </button>
        </div>
      </div>
    </>
  );
}

export default Match;