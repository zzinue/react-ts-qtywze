import * as React from 'react';
import './style.css';
import {Details}
import About from "./Pages/About"

//import Page 
import {Home} from './pages/Home'
/* 
1.- tiene una pagina home donde nos muestra los primeros 20 personajes
2.- Tiene una pagina about donde habla de ustedes como devs ( hacer un parrafo y foto)
3.- Agregar estilos
2.- al hacer click a un personaje me direcciona a una pantalla de detalle del personaje

Retos:investigar paginacion e implemetarla en home
preguntar por el infiniti scroll
*/

export default function App() {
  return (
    <div>
  <Routes>
    <Route path="/" element ={Home/>}/>
    <Route path="/About"
  </Routes>
    </div>
  );
}
