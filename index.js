import {
  errorText,goButton,renderContainer,resultsName,resultImg,resultImgBack,resultImgShiny,
	resultImgBackShiny,resultsDataId,resultsDataType,resultsDataExprerience,
} from "./domSelects.js";
addEventListener(`DOMContentLoaded`, () => {
	
  async function getPokemon() {
    const pokemonName = document
      .getElementById(`select-pokemon`)
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    if (pokemonName === "" || response.status !== 200) {
      catchError();
      return;
    }

    const data = await response.json();
    let pokemonSave = {
      name: data.name,
      pokemon_id: data.id,
      type: data.types,
      base_experience: data.base_experience,
      front_default: data.sprites.front_default,
      back_default: data.sprites.back_default,
      front_shiny: data.sprites.front_shiny,
      back_shiny: data.sprites.back_shiny,
    };
    renderPokemon(
      pokemonSave.name,
      pokemonSave.front_default,
      pokemonSave.back_default,
      pokemonSave.front_shiny,
      pokemonSave.back_shiny,
      pokemonSave.pokemon_id,
      pokemonSave.type[0].type.name,
      pokemonSave.base_experience
    );
    renderContainer.classList.remove("show");
    console.log(pokemonSave);
    console.log(data);
  }

  function renderPokemon(
    name,
    front,
    back,
    front_shiny,
    back_shiny,
    id,
    type,
    experience
  ) {
    resultsName.textContent = name;
    resultImg.setAttribute(`src`, `${front}`);
    resultImgBack.setAttribute(`src`, `${back}`);
    resultImgShiny.setAttribute(`src`, `${front_shiny}`);
    resultImgBackShiny.setAttribute(`src`, `${back_shiny}`);
    resultsDataId.textContent = id;
    resultsDataType.textContent = type;
    resultsDataExprerience.textContent = experience;
  }

  function catchError() {
    errorText.classList.remove("show");
    setTimeout(() => {
      errorText.classList.add("show");
    }, 4000);
  }

  goButton.addEventListener("click", () => {
    getPokemon();
  });
});
