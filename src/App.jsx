import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [starWarsData, setStarWarsData] = useState({})
  const [count, setCount] = useState(1)  
  // console.log("Component rendered")
  useEffect(function() {
    fetch(`https://swapi.dev/api/people/${count}`)
    .then(res => res.json())
    .then(data => setStarWarsData(data))
  }, [count])

  
  return (
      <div>
          <h1>The count is {count}</h1>
          <button onClick={()=>setCount(prevCount=>prevCount+1)}>Go next character</button>
          <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      </div>
  )
}


export default App
