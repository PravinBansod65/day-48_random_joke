const jokeContainer = document.getElementById("joke");
const emoji = document.getElementById("emoji");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const url2 =
  "https://hindi-jokes-api.onrender.com/jokes?api_key=20cf039907056a6e0843cbf41767";
let url1 = "https://v2.jokeapi.dev/joke/Programming?type=single";

// !    url 2
let getHindiJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url2)
    .then((data) => data.json())
    .then((item) => {
      // console.log(item)
      jokeContainer.textContent = `${item.jokeContent}`;
      jokeContainer.classList.add("fade");
    });
};
// !    url 1
let getEnglishJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url1)
    .then((data) => data.json())
    .then((item) => {
      console.log(item.joke);
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade");
    });
};
btn1.addEventListener("click", getEnglishJoke);
btn2.addEventListener("click", getHindiJoke);
// getHindiJoke();
getEnglishJoke();

const emojis = [
  "😹",
  "😸",
  "😆",
  "😅",
  "🤣",
  "😂",
  "😛",
  "🤭",
  "🥰",
  "🤪",
  "😃",
  "😁",
];

btn1.addEventListener("click", () => {
  setTimeout(() => {
    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.filter = "grayscale(0)";
  }, "500");
});
btn2.addEventListener("click", () => {
  setTimeout(() => {
    emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.filter = "grayscale(0)";
  }, "1800");
  // emoji.classList.add("fade");
});
