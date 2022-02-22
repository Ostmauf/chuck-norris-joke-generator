const jokeContainerElement = document.getElementById("joke-container");
const jokeButn = document.getElementById("new-joke-button");

jokeButn.addEventListener("click", async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();

    jokeContainerElement.textContent = "Joke: " + data.value;
});

