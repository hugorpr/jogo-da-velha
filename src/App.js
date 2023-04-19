import React from 'react';
import Sobre from './objects/Sobre'
import Logo from './objects/Logo';
import Menu from './objects/Menu';

const App = () => {
  return (
    <>
      <Logo />
      <Sobre label='Sobre' />
      <Menu />
    </>
  )
}

export default App;