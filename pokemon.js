const evoUrl = `https://pokeapi.co/api/v2/evolution-chain/${name}`;

const evoBtn = document.querySelector(".carousel-control-next");
const devoBtn = document.querySelector(".carousel-control-prev");
const submitPoke = document.querySelector("#pokeBtn");

fetch(evoUrl)
  .then(function (result) {
    return result.json();
  })
  .then(function (json) {
    displayResults(json);
  });

function displayResults(jsonData) {
  console.log(jsonData);

  submitPoke.addEventListener("click", displayResults);

  // let img1 = document.getElementById("evo1");
  // let img2 = document.getElementById("evo2");
  // let img3 = document.getElementById("evo3");

  // // img1.src = jsonData.results.sprites;
}
//make a change
