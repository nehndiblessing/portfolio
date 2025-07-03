import React from "react";
import Presentation from "./Presentation";
import './App.css'

function App(){
  const person = {name:'STIVE', age: 5}
  const array = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']

  return(
    <>
      <h2 className="hi">My name is {person.age}</h2>
      <p>{array.map(value => <h1>{value}</h1>)}</p>
      <Presentation/>
    </>    
  )
}
export default App