const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const forcastEl = document.querySelector(".forcast");
const locationEl = document.querySelector(".location");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  search.value = "";
  forcastEl.textContent = "loading...";
  location.textContent = "";
  fetch(`http://localhost:3000/weather?address=${location}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) return console.log(data.error);
      forcastEl.textContent = `Weather today: ${data.forcast}`;
      locationEl.textContent = `Location: ${data.location}`;
    });
});
