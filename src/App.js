import { useEffect, useState } from "react";
import "./App.css";
import { getAllJokes } from "./services/jokeService";

export const App = () => {
  const [handleInputEvent, setOnChangeInputEvent] = useState([]);
  const [allJokes, setAllJokes] = useState([])

  useEffect(() => {
    getAllJokes().then((jokesArray) => {
      setAllJokes(jokesArray)
      console.log(jokesArray)
    })
  }, [])

  const handleButtonClick = () => {
    console.log(handleInputEvent)
  }


  return (
    <div>
      <header className="app-heading">
        <h1 className="app-heading-text">Chuckles Checklist</h1>
      </header>

      <h2>Add Joke</h2>
      <input
        className=""
        type="text"
        value={handleInputEvent}
        placeholder="New One Liner"
        onChange={(handleInputEvent) => {
          setOnChangeInputEvent(handleInputEvent.target.value);
          
        }}
      />
      <button type="button" onClick={handleButtonClick}>Submit Joke</button><br></br>
      <div style={{fontSize: 24 }}>You Entered: {handleInputEvent}</div>
    </div>

  );
};
