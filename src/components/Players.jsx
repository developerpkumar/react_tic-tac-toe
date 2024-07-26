import React from "react";

function Player({ name, symbol }) {
  return (
    <div>
      <h3>
        <span className="symbol">{symbol}</span>
        <span>{name}</span>
        <button className="edit-btn">Edit</button>
      </h3>
    </div>
  );
}

export default Player;
