import React, { useState, useEffect } from "react";
import Planet from "./planet";
import Form from "./Form";

// acessando dados da API
async function getPlanets() {
  let response = await fetch("http://localhost:3000/api/planets.json");
  let data = await response.json();
  return data;
}

/*  método chamado quando o componente é renderizado!!
componentDidMount() {
  getPlanets().then(data => {
    setState(state => ({
      planets: data['planets']
    }))
  })
} */

const Planets = () => {
  // adicionando e inicializando estado. Também declarando o método que será executado para alterar esse estado. [onde fica o estado, método que altera]
  const [planets, setPlanets] = useState(
    []
  );

  useEffect(() => {
    getPlanets().then((data) => {
      setPlanets(data["planets"]);
    });
  }, [] ); // esse array vazio como parametro indica o estado que o useEffect irá ficar monitorando! Se deixar sem o planets eh atualizado 2x.

  const removeLast = () => {
    let new_planets = [...planets]; // estraindo todos os dados do objeto!!
    new_planets.pop();

    setPlanets(new_planets);
  };

  const duplicateLastPlanet = () => {
    let lastPlanet = planets[planets.length - 1];

    setPlanets([...planets, lastPlanet]);
  };

  const addPlanets = (new_planet) => {
    setPlanets([...planets, new_planet]);
  }

  return (
    <>
      <h3>Planet List</h3>
      <hr />
      <Form addPlanet={addPlanets} />
      <button onClick={removeLast}>remove last</button>
      <button onClick={duplicateLastPlanet}>duplcate last</button>
      <hr />
      {planets.map((planet, index) => (
        <Planet
          key={index}
          id={planet.id}
          name={planet.name}
          description={planet.description}
          img_url={planet.img_url}
          link={planet.link}
        />
      ))}
    </>
  );
};

export default Planets;
