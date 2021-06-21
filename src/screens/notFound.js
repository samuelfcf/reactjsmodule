import React from 'react'

import { Link } from 'react-router-dom';

const NotFoundScreen = () => {
  
  return (
    <>
      <h3>Página não encontrada.</h3>
      <Link to='/'>Voltar a listagem</Link>
    </>
  );
  
}

export default NotFoundScreen;