import React from "react";

const Musicos = ({ artistas }) => {
  const listMusicos = artistas.map((artista) => {
    return (
      <div key={artista.id}>
        <div>{artista.name}</div>
      </div>
    );
  });

  return <div className="list-musicos">{listMusicos}</div>;
};

export default Musicos;
