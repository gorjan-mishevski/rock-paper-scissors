import React from 'react';
import iconRock from "../images/icon-rock.svg";
import iconPaper from "../images/icon-paper.svg";
import iconScissors from "../images/icon-scissors.svg";
import {hands} from "../App";

function Option({name}) {

  const renderIcon = () => {
    if (name === hands.paper) {
      return iconPaper;
    } else if (name === hands.rock) {
      return iconRock;
    }
    return iconScissors;
  }

  const calculateBackgroundShadow = () => {
    if (name === hands.paper) {
      return "bg-rpc-sky";
    } else if (name === hands.rock) {
      return "bg-rpc-red";
    }
    return "bg-rpc-banana";
  }

  return (
    <>
      <div className={`option-${name} flex`}>
        <img src={renderIcon()} alt={`${name} option`} className="md:" />
      </div>
      <div className={`absolute w-33 h-33 md:w-40 md:h-40 mt-0.5 ${calculateBackgroundShadow()} rounded-full`}/>
    </>
  );
}

export default Option;