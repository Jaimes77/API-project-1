const image = document.getElementById("image"); //image screen
const searchInput = document.getElementById("search-input"); //input box
const submit = document.getElementsByClassName("submit")[0]; //submit button
const stats = document.getElementById("stats");

const getPokemon = () => {
  const url = `https://pokeapi.co/api/v2/pokemon/${searchInput.value}`;
  fetch(url)
    .then((res) => {
      return res.json();
    })

    .then((data) => {
      const pokemon = {
        name: data.name,
        image: data.sprites["front_default"],
        ability: data.abilities
          .map((ability) => ability.ability.name)
          .join(", "),
        type: data.types.map((type) => type.type.name).join(", "),
      };

      displayPokecard(pokemon);
    });
};

submit.addEventListener("click", getPokemon);
const displayPokecard = (pokemon) => {
  while (stats.firstChild) {
    stats.removeChild(stats.firstChild);
  }
  const list = document.createElement("li");
  const list2 = document.createElement("li");
  const list3 = document.createElement("li");

  //set the src of screen to pokemon.image
  image.src = pokemon.image;
  list.innerText = `Name: ${pokemon.name}`;
  list2.innerText = `Ability: ${pokemon.ability}`;
  list3.innerText = `Type: ${pokemon.type}`;
  stats.appendChild(list);
  stats.appendChild(list2);
  stats.appendChild(list3);
};
