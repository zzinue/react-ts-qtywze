import React, {useState, useEffect} from 'react'
import axios from 'axios'

const URL = 'url de rick y morti'
export const Home =()=>{
  const [character, setCharacter]=React.useState([]) 

  useEffect(async()=>{
    const {data}=await axios (URL)
    console.log(data)
    setCharacter(data.results)
  },[])
  return (
    <>
  <h1>Rick and Morty</h1>
  <div className="Home-content result">
    {

    }
  </div>
    </>
  )
}