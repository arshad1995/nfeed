import React from "react";
import "./Newsfeed.css";

const NewsFeed = props => {
  return (
    <div className="main">
      <div className="card1">
        <img src={props.urlToImage} />
      </div>
      <div className="card2">
        <p className="title">
          <a href={props.url} target={"_blank"}>
            {props.title}
          </a>
        </p>
        <p className="description"> {props.description}</p>
        <p className="author"> {props.author}</p>
      </div>
    </div>
  );
};

export default NewsFeed;
