import React, {useState, useEffect, useReducer} from "react";
import { renderIntoDocument } from "react-dom/test-utils";

// https://api.github.com/users/danstafford

function Fetch({ login }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    if (!login) return;
    setLoading(true)
    
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${login}`)
    // fetch(`https://api.github.com/users/${login}`)
    // fetch(`https://api.openbrewerydb.org/breweries?by_state=${login}`)
      .then(response => response.json())
      .then(setData)
      .then(setLoading(false))
      .catch(setError);
  }, [login])

  if (loading) {
    console.log('loading...');
    return <h1>Loading....</h1>;
  }
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;

  // console.log(data)

  return (
    <div>
      <h2>Fetch</h2>
      <h3>Word: {data[0].word}</h3>
      <p>Meaning: {data[0].meanings[0].definitions[0].definition}</p>
    </div>
  )
}

export default Fetch
