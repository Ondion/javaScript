import React from "react";
import PropType from "prop-types";

class TvShow extends React.Component {
  render() {
    const { tvShowInfo } = this.props;
    
    return (
      <article>
        <h2>{tvShowInfo.name}</h2>
        <img src={tvShowInfo.image} alt={tvShowInfo.name} />
        <p>Gênero: {tvShowInfo.genre}</p>
        <p>
          <strong>Personagens:</strong>{" "}
          {tvShowInfo.characters.map((name, index) => (
            <small key={index}>{name} | </small>
          ))}
        </p>
        <p>
          <strong>Informações:</strong>{" "}
          <small>{tvShowInfo.info.seasons} | {tvShowInfo.info.episodes}</small>
        </p>
      </article>
    );
  }
}

TvShow.propTypes = {
  tvShowInfo: PropType.shape({
    name: PropType.string,
    image: PropType.string,
    genre: PropType.string,
    info: PropType.shape({
      seasons: PropType.string,
      episodes: PropType.number,
    }),
  }).isRequired
};

export default TvShow;
