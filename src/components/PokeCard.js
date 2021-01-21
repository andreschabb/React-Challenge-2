import "../styles.css";
import React from "react";

import { mockPokemonData } from "../mock/pokeData";

const PokeImages = ({ images, name }) => {
  const { front_default, front_shiny } = images;

  return (
    <div className="row">
      <div className="col-sm">
        <img src={front_default} alt={name} />
      </div>
      <div className="col-sm">
        <img src={front_shiny} alt={name} />
      </div>
    </div>
  );
};

const PokeCard = () => {
  const { name, sprites, video } = mockPokemonData;

  return (
    <div className="PokeCard container">
      <h1>{name}</h1>
      <PokeImages images={sprites} name={name} />
      <hr />
      <a id="video" href={video}>
        Follow the video
      </a>
    </div>
  );
};

export default PokeCard;
