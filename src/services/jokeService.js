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
  // const joke = await response.json()
  // jokeObject = joke.told
};
//try{
//   if (response.ok) {
//     console.log('Joke updated successfully');
//     // You can reset the userInput state here if needed

//   } else {
//     console.error('Failed to update joke');
//   }
// } catch (error) {
//   console.error('Error updating joke:', error);
// }

// const element = document.querySelector('#put-request .date-updated');
// const requestOptions = {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ title: 'Fetch PUT Request Example' })
// };
// fetch('https://reqres.in/api/articles/1', requestOptions)
//     .then(response => response.json())
//     .then(data => element.innerHTML = data.updatedAt );
