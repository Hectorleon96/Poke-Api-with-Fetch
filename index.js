import { domElements } from "./domElement.js";
addEventListener(`DOMContentLoaded`, () => {
  async function getPokemon() {
    const DOM = domElements;
    const pokemonName = document
      .getElementById(`select-pokemon`) // Select Pokémon
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (pokemonName === "" || response.status !== 200) {
      catchError(DOM);
      return;
    }

    const data = await response.json();
    renderImages(data, DOM);
  }

  function renderImages(data, DOM) {
    let imagesData = Object.values(data.sprites);
    let finalImagesData = [];
    imagesData.forEach((element) => {
      if (typeof element === typeof "string") {
        finalImagesData.push(element);
      }
    });

    for (let i = 0; i < finalImagesData.length; i++) {
      let imageElements = document.createElement("img");
      imageElements.classList.add("images");
      imageElements.setAttribute("src", finalImagesData[i]);
      DOM.render_images.appendChild(imageElements);
    }
    DOM.render.classList.remove("show");
  }

  function catchError(DOM) {
    DOM.error.classList.remove("show");
    setTimeout(() => {
      DOM.error.classList.add("show");
    }, 3000);
  }

  domElements.start.addEventListener("click", () => {
    getPokemon();
  });
});
