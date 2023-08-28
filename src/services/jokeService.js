export const getAllJokes = () => {
    return fetch (`http://localhost:8088/jokes`).then(res => res.json())
}

export const saveJokeInJokeObject = () => {
    fetch (`http://localhost:8088/jokes`)
}