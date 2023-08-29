import { useEffect, useState } from "react";
import "./App.css";
import { getAllJokes, submitJoke } from "./services/jokeService";
import stevePic from "./assets/steve.png"

export const App = () => {
  const [inputEvent, setInputEvent] = useState("");

  const [allJokes, setAllJokes] = useState([]);

  useEffect(() => {
    getAllJokes().then((jokesArray) => {
      setAllJokes(jokesArray);
      console.log(jokesArray);
    });
  }, [inputEvent]);

  //   const handleButtonClick = () => {
  //     console.log(inputEvent)
  //   }

  const click = () => {
    submitJoke(inputEvent)
    setInputEvent('');
  }
    

  return (
    <div className="app-container">
      <header className="app-heading"><div className="app-heading-circle">
   <img className="app-logo" src={stevePic} alt="Good job Steve" />
 </div>
        <h1 className="app-heading-text">Chuckles Checklist</h1>
      </header>

      <h2>Add Joke</h2>
      <div className="joke-add-form">
      <input
        className="joke-input"
        type="text"
        value={inputEvent}
        placeholder="New One Liner"
        onChange={(Event) => {
          setInputEvent(Event.target.value);
        }}
      />
      <button className="joke-input-submit" onClick={inputEvent ? click : null}>
        Submit Joke
      </button></div>
      <br></br>
      <div>
        {allJokes.map((joke) => {
          return (
            <div key={joke.id}>
              <div>{joke.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
