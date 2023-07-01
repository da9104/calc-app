import Heading from '../Heading'
import React, { useState } from 'react';

export default function App() { 
  const [word, setWord] = React.useState('Eat'); 

  function handleClick() {
    setWord('Drink')
  }

  return ( 
    <div className='App'> 
      <Heading message={word + " at little Lemon"} />
      <button onClick={handleClick}>Click</button>
    </div> 
  ); 
} 