import { useEffect, useState } from "react";
import "./App.css";
import { changeJokeValue, getAllJokes, submitJoke } from "./services/jokeService";
import stevePic from "./assets/steve.png";

export const App = () => {
  const [inputEvent, setInputEvent] = useState("");
  const [allJokes, setAllJokes] = useState([]);
  const [toldJokes, setToldJokes] = useState([]);
  const [notToldJokes, setNotToldJokes] = useState([]);
 // const [jokeValueChange, setJokeValueChange] = useState(false)

  useEffect(() => {
    getAllJokes().then((jokesArray) => {
      setAllJokes(jokesArray);
      console.log(jokesArray);
    });
  }, [inputEvent]);

  useEffect(() => {
    const checkJoke = (joke) => {
      return joke.told === true;
    };
    const jokes = allJokes.filter(checkJoke);

    setToldJokes(jokes);
    //console.log(jokes);
  }, [allJokes]);

  useEffect(() => {
    const checkJoke = (joke) => {
      return joke.told === false;
    };
    const jokes = allJokes.filter(checkJoke);

    setNotToldJokes(jokes);
   // console.log(jokes);
  }, [allJokes]);

  const clickSubmit = () => {
    submitJoke(inputEvent);
    setInputEvent("");
  };

// const jokeChange =  (joke) => { 
//       changeJokeValue(joke)

//     }
  



  return (
    <>
    <div className="app-container">
      <header className="app-heading">
        <div className="app-heading-circle">
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
        <button
          className="joke-input-submit"
          onClick={inputEvent ? clickSubmit : null}
        >
          Submit Joke
        </button>
      </div>

      <div >
        <section className="joke-lists-container">
        <article className="joke-list-container">
          <h2>Not Told Jokes<span className="told-count">{notToldJokes.length}</span></h2>
          {notToldJokes.map((joke) => {
            return (
              <section className="joke-list-item" key={joke.id}>
                <div>{joke.text}
                <span>
                  <button onClick={() => changeJokeValue(joke)}>SAD BUTTON</button>
                </span>
                </div>
              </section>
            );
          })}
        </article>
        
        <article className="joke-list-container">
          <h2>Told Jokes!<span className="untold-count">{toldJokes.length}</span></h2>
          {toldJokes.map((joke) => {
            return (
              <section key={joke.id}>
                <div className="joke-list-item">{joke.text}<span></span></div>
                
              </section>
            );
          })}
        </article></section>
      </div>

      <br></br>

      {/* <div>
        {allJokes.map((joke) => {
          return (
            <div key={joke.id}>
              <div>{joke.text}</div>
            </div>
          );
        })}
      </div> */}
    </div>
    </>
  );
};


//<button onClick={}>SAD BUTTON</button>