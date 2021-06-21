import React, { useState, useEffect } from 'react';

import GrayImg from '../../shared/gray_img';
import DescriptionWithLink from '../../shared/DescriptionWithLink';
import Form from './form';

async function getSatellites(id) {
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

const Planet = (props) => {

  // declarando onde fica o state e o método que irá atualizá-lo
  const [satellites, setSatellite] = useState(
    []
  );

  
  useEffect(() => {
    getSatellites(props.id).then(data => {
      setSatellite(data['satellites'])
    })
  }, [props]) // sem o props dentro do array tava dando erro!

  const addSat = (new_sat) => {
    setSatellite([...satellites, new_sat]);
  }

  let title;
  if (props.title_with_underline) {
    title = <h3><u>{props.name}</u></h3>
  } else {
    title = <h3>{props.name}</h3>
  }

  return (
    <div>
      {title}
      <DescriptionWithLink description={props.description} link={props.link} />
      <GrayImg img_url={props.img_url} gray={props.gray} />

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

