import React from 'react';

function Scoreboard({score}) {
  return (
    <div className="border-white border-solid border-4 border-opacity-25 rounded-md p-3 flex justify-between">
      <div className="font-bold text-white leading-4 text-xl uppercase m-3">
        <p>Rock</p>
        <p>Paper</p>
        <p>Scissors</p>
      </div>

      <div className="bg-white rounded px-5 py-2 text-center">
        <p className="text-rpc-blue-light font-bold uppercase text-xs">
          Score
        </p>
        <p className="mx-3 text-3xl font-bold text-rpc-dark leading-snug -mt-1">
          {score}
        </p>
      </div>
    </div>
  );
}

export default Scoreboard;