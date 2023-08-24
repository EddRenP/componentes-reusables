import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Contenedor, Contenedor2 } from './components/Contenedor'
//import './App.css'

let persona = {
  "id" : "1",
  "nombre" : "Eduardo",
  "apellido" : "Rendon",
  "edad" : "24",
  "estaAutenticado" : true,
};

let mascota = {
  "id" : "1",
  "nombre" : "Firulais",
  "vacunado" : false,
}

function App() {
  return (
    <div className="App">
      <h1>Persona</h1>
      <Contenedor persona={persona}/>
      <h1>Mascota</h1>
      <Contenedor2 mascota={mascota}/>
    </div>
  )
}

export default App
