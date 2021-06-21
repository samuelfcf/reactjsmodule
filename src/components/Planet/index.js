import React, { useState, useEffect } from 'react';

import GrayImg from '../shared/gray_img';
import DescriptionWithLink from '../shared/DescriptionWithLink';
import Form from './form';

import { useParams } from 'react-router-dom';

async function getPlanet(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`)
  let data = response.json();
  return data;
}

/* componentDidMount() {
  getSatellites(this.props.id).then(data => {
    this.setState(state => ({
      satellites: data['satellites']
    }))
  })
} */

const Planet = () => {

  // declarando onde fica o state e o método que irá atualizá-lo
  const [satellites, setSatellite] = useState(
    []
  );

  const [planet, setPlanet] = useState(
    {}
  );

  // pegando o id do objeto com lista de parâmetros retornado por useParams.
  let { id } = useParams();

  
  useEffect(() => {
    getPlanet(id).then(data => {
      setSatellite(data['satellites']);
      setPlanet(data['data']);
    })
  }, [planet]) // sem o planet dentro do array tava dando erro!

  const addSat = (new_sat) => {
    setSatellite([...satellites, new_sat]);
  }

  let title;
  if (planet.title_with_underline) {
    title = <h3><u>{planet.name}</u></h3>
  } else {
    title = <h3>{planet.name}</h3>
  }

  return (
    <div>
      {title}
      <DescriptionWithLink description={planet.description} link={planet.link} />
      <GrayImg img_url={planet.img_url} gray={planet.gray} />

      <h4>Satélites</h4>
      <ul>
        {satellites.map((satellite, index) =>
          <li key={index}>{satellite.name}</li>
        )}
      </ul>

      <Form addSat={addSat}/>

      <hr />
    </div>
  );

}

export default Planet;

