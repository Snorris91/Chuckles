export const getAllJokes = () => {
    return fetch (`http://localhost:8088/jokes`).then(res => res.json())
}

export const saveJokeInJokeObject = () => {
    fetch (`http://localhost:8088/jokes`)
}

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
      console.log('Joke submitted successfully');
      // You can reset the userInput state here if needed
    
    } else {
      console.error('Failed to submit joke');
    }
  } catch (error) {
    console.error('Error submitting joke:', error);
  }
};