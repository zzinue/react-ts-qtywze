import React, {useState, useEffect} from 'react'
import axios from 'axios'

const URL = 'url de rick y morti'
export const Home =()=>{
  const [characters, setCharacter]=React.useState([]) 

  useEffect(async()=>{
   fetch(URL)
    .then((res)=>res.json())
    .then((body)=>setCharacter([...characters, body.results]))
  },[])
  console.log(characters)
  //refactoriza el elementos character item
  return (
    <>
  <h1>Rick and Morty</h1>
  <div className="Home-content result">
    characters.map(character=>(
      <div> key={character.id}</div>))
    <p>{character.name}</p>
    <img src="{character.image}" alt="{character.name}">
  </div>
    </>
  )
}