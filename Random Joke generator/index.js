const jokeButton = document.getElementById("jokeButton");
const jokeText = document.getElementById("jokeText");

async function getJoke() {
  try {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
    const data = await response.json();

    if (data.joke) {
      jokeText.textContent = data.joke;
    } else {
      jokeText.textContent = "Oops! Couldn't fetch a joke.";
    }
  } catch (error) {
    jokeText.textContent = "An error occurred. Please try again.";
  }
}

jokeButton.addEventListener("click", getJoke);
