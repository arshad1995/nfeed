import React from "react";
import "./Button.css";

const Button = props => {
  return (
    <div>
      <button className="btn" onClick={() => props.fetch(props.channel_id)}>
        <p>{props.name}</p>
      </button>
    </div>
  );
};

export default Button;
