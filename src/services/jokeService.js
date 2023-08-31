export const getAllJokes = () => {
  return fetch(`http://localhost:8088/jokes`).then((res) => res.json());
};

export const saveJokeInJokeObject = () => {
  fetch(`http://localhost:8088/jokes`);
};

export const submitJoke = async (inputEvent) => {
  const jokeObject = {
    text: inputEvent,
    told: false,
  };
  try {
    const response = await fetch("http://localhost:8088/jokes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jokeObject),
    });
    if (response.ok) {
      console.log("Joke submitted successfully");
      // You can reset the userInput state here if needed
    } else {
      console.error("Failed to submit joke");
    }
  } catch (error) {
    console.error("Error submitting joke:", error);
  }
};

export const changeJokeValue = async (jokeObject) => {
  const jokeData = {
    key: jokeObject.id,
    text: jokeObject.text,
    told: !jokeObject.told,
  };
  console.log(jokeData);
  const jokeOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jokeData),
  };
  const response = await fetch(
    `http://localhost:8088/jokes/${jokeObject.id}`,
    jokeOptions
  );
  if (response.ok) {
    console.log("Joke Updated")
  }
};

export const deleteJoke = async (joke) => {
  const jokeOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(
    `http://localhost:8088/jokes/${joke.id}`,
    jokeOptions
  );
  if (response.ok) {
    console.log("Joke Deleted")
  }
};
