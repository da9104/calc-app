import React, { useRef, useState  } from 'react'
import './App.css'
import { Button, Card } from 'reactstrap'
import { Routes, Route, Link } from 'react-router-dom'

function App() { 
  const inputRef = useRef(null)
  const resultRef = useRef(null)
  const [ result, setResult ] = useState(0)

  const plus = (e) => {
    e.preventDefault()
    setResult((result) => result + Number(inputRef.current.value))
  }
  const minus = (e) => {
    e.preventDefault()
    setResult((result) => result -  Number(inputRef.current.value))
  }
  const times = (e) => {
    e.preventDefault()
    setResult((result) => result * Number(inputRef.current.value))
  }
  const divide = (e) => {
    e.preventDefault()
    setResult((result) => result / Number(inputRef.current.value))
  }
  const resetInput = (e) => {
    e.preventDefault()
    inputRef.current.value = 0;
  }
  const resetResult = (e) => {
    e.preventDefault()
    setResult((prevVal) => prevVal * 0)
  }

  return ( 
   <div className='App'>

    <section id="up"></section>
    <section id="down"></section>
    <section id="left"></section>
    <section id="right"></section>

    <nav>
      <div className='logo'>
      <h1>
      <i class="bi bi-calculator" 
      style={{fontSize: '1rem', 
      marginRight: '5px',
      color: 'white',
      borderRadius: '5px',
      padding: '6px',
      backgroundImage: 'linear-gradient(80deg, rgb(206, 182, 241, 0.5), rgba(138, 30, 240, 0.3) )'
      }}>
      </i>
      <Link to="/" style={{ textDecoration: 'none', color:'white' }}>Calc.</Link></h1>
      </div>
      <ul className='nav-list'>

      <li>
      Simplest Working Calculator
      </li>

       </ul>
    </nav>

   <div>
   
    </div>
    <div className='wrapper'>
    <Card id="card" className='p-2 shadow p-3 mb-5 bg-body-tertiary rounded' 
    style={{border: 'none', backgroundColor: 'transparent'}}>
    <form action="">
      <p className='result' ref={resultRef}>{result}</p>
      <input type="number" pattern="[0-9]" ref={inputRef} placeholder='Type a number' />
  
     <Button color="danger" onClick={plus}>add</Button>
     <Button onClick={minus}>minus</Button>
     <Button onClick={times}>times</Button>
     <Button onClick={divide}>divide</Button>
     <Button onClick={resetInput}>Reset input</Button>
     <Button onClick={resetResult}>Reset result</Button>
    
    </form>
    </Card>

    </div>

    </div>
  ); 
}; 

export default App;