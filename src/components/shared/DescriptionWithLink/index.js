import React from 'react';

const DescriptionWithLink = (props) => {

  if(!props.description) return null;

  if(props.link){
    return (
      <>
        <p>{props.description}</p>
        <p>
            <a href={props.link}>Clique aqui para mais informações!</a>
        </p>
      </>
    );
  } 
  
  else {
    return (
      <>
        <p><u>{props.description}</u></p>
      </>
    );
  }

}

export default DescriptionWithLink;