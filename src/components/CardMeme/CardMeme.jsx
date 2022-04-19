import React from "react";
import "./CardMeme.scss";
import { useContext } from "react";
import { Context } from "../../contexts/Context";

const CardMeme = ({ meme }) => {
  const { phrase, phrase2, topStyle, bottomStyle } = useContext(Context);
  console.log(topStyle);
  console.log(topStyle);

  return (
    <div className="c-card">
      <h2 style={{ fontSize: topStyle + "px" }} className="c-card__title">
        {phrase}
      </h2>
      <img data-testid="card--img" className="c-card__img" src={meme.url} alt={meme.name}></img>
      <h2 style={{ bottomStyle }} className="c-card__title">
        {phrase2}
      </h2>
    </div>
  );
};

export default CardMeme;
