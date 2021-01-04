import React from 'react';
import BoardRules from "../images/image-rules.svg";

function Rules(props) {
  const [showRules, setShowRules] = React.useState(false);

  return (
    <>
      <div className="flex justify-center text-white">
        <button className="border-white border-2 rounded-lg px-8 py-1 uppercase" onClick={() => setShowRules(true)}>
          Rules
        </button>
      </div>

      <div className={`z-10 fixed w-full h-full top-0 left-0 bg-white flex flex-col ${showRules ? "" : "hidden"}`}>
        <div className="flex my-32 justify-center uppercase font-bold text-3xl text-rpc-dark">
          <h1 className="">
            Rules
          </h1>
        </div>

        <div className="flex flex-grow-0 justify-center">
          <img src={BoardRules} alt="Board rules"/>
        </div>

        <div className="flex flex-grow flex-col content-center justify-center text-rpc-shadow text-3xl">
          <button onClick={() => setShowRules(false)}>X</button>
        </div>
      </div>
    </>
  );
}

export default Rules;