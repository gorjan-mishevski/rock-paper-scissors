import React from 'react';
import {hands} from "../App";
import Option from "./option";

function Board({handleOnSelectHand, setShowBoard}) {
  return (
    <div className="my-56 md:my-40 flex justify-center">
      <div className="bg-main-board flex">
        <div className="relative option-container-position-paper flex"
             onClick={() => {
               handleOnSelectHand(hands.paper);
               setShowBoard(false);
             }}>
          <Option name="paper"/>
        </div>
        <div className="relative option-container-position-scissors flex"
             onClick={() => {
               handleOnSelectHand(hands.scissors);
               setShowBoard(false);
             }}>
          <Option name="scissors"/>
        </div>
        <div className="relative option-container-position-rock flex"
             onClick={() => {
               handleOnSelectHand(hands.rock);
               setShowBoard(false);
             }}>
          <Option name="rock"/>
        </div>
      </div>
    </div>
  );
}

export default Board;