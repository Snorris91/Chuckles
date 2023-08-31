import { useEffect, useState } from "react";
import "./App.css";
import {
  changeJokeValue,
  getAllJokes,
  submitJoke,
  deleteJoke
} from "./services/jokeService";
import stevePic from "./assets/steve.png";
// import { click } from "@testing-library/user-event/dist/click";

export const App = () => {
  const [inputEvent, setInputEvent] = useState("");
  const [allJokes, setAllJokes] = useState([]);
  const [toldJokes, setToldJokes] = useState([]);
  const [notToldJokes, setNotToldJokes] = useState([]);

  useEffect(() => {
    getAllJokes().then((jokesArray) => {
      setAllJokes(jokesArray);
    });
  }, []);

  const getJokes = () => {
    getAllJokes().then((jokesArray) => {
      setAllJokes(jokesArray);
    });
  }


  useEffect(() => {
    const untold = allJokes.filter((joke) => !joke.told);
    setNotToldJokes(untold);
    const told = allJokes.filter((joke) => joke.told);
    setToldJokes(told);
  }, [allJokes]);

  const clickSubmit = async (joke) => {
    await submitJoke(joke);
    await getJokes()
    setInputEvent("");
  };
  

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
            onChange={(e) => {
              setInputEvent(e.target.value);
            }}
          />
          <button
            className="joke-input-submit"
            onClick={() => clickSubmit(inputEvent)}
          >
            Submit Joke
          </button>
        </div>

        <div>
          <section className="joke-lists-container">
            <article className="joke-list-container">
              <h2>
                Not Told Jokes
                <span className="told-count">{notToldJokes.length}</span>
              </h2>
              {notToldJokes.map((joke) => {
                return (
                  <section className="joke-list-item" key={joke.id}>
                    <p className="joke-list-item-text">{joke.text}</p>
                  
                    <div className="joke-list-action-toggle">
                      <button onClick={async () => {await changeJokeValue(joke); getJokes()}}>
                        HAPPY BUTTON
                      </button></div>
                      <div className="joke-list-action-delete">
                      <button onClick={async () => {await deleteJoke(joke); getJokes()}}>TRASH</button>
                    </div>
                  </section>
                );
              })}
            </article>

            <article className="joke-list-container">
              <h2>
                Told Jokes!
                <span className="untold-count">{toldJokes.length}</span>
              </h2>
              {toldJokes.map((joke) => {
                return (
                  <section className="joke-list-item" key={joke.id}>
                    <p className="joke-list-item-text">{joke.text}</p>

                    <div className="joke-list-action-toggle">
                      <button onClick={async () => {await changeJokeValue(joke); getJokes()}}>
                        SAD BUTTON
                      </button></div>
                      <div className="joke-list-action-delete">
                      <button onClick={async () => {await deleteJoke(joke); getJokes()}}>TRASH</button>
                    </div>
                  </section>
                );
              })}
            </article>
          </section>
        </div>
      </div>
    </>
  );
};
