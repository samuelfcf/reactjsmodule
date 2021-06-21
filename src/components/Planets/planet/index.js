import React from 'react';

import GrayImg from '../../shared/gray_img';
import DescriptionWithLink from '../../shared/DescriptionWithLink';


const Planet = (props) => {


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

      <hr />
    </div>
  );

}

export default Planet;

