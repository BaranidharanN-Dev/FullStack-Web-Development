const input = document.querySelector("#pokemon-input");
const searchBtn = document.querySelector("#search-btn");

const previousBtn = document.querySelector("#previous-btn");
const nextBtn = document.querySelector("#next-btn");

const pokemonImage = document.querySelector("#pokemon-image");
const pokemonName = document.querySelector("#pokemon-name");
const pokemonNumber = document.querySelector("#pokemon-number");

const pokemonTypes = document.querySelector("#pokemon-types");

const pokemonHeight = document.querySelector("#pokemon-height");
const pokemonWeight = document.querySelector("#pokemon-weight");
const pokemonXp = document.querySelector("#pokemon-xp");

const errorMessage = document.querySelector("#error-message");


let currentPokemonId = 1;


// Get Pokémon from API
async function getPokemon(pokemon) {

    try {

        errorMessage.textContent = "";

        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        );

        if (!response.ok) {
            throw new Error("Pokémon not found");
        }

        const data = await response.json();

        displayPokemon(data);

        // Store current Pokémon ID
        currentPokemonId = data.id;

    } catch (error) {

        errorMessage.textContent = "Pokémon not found.";

    }
}


// Display Pokémon
function displayPokemon(data) {

    pokemonImage.src =
        data.sprites.other["official-artwork"].front_default;

    pokemonImage.alt = data.name;

    pokemonName.textContent = data.name;

    pokemonNumber.textContent =
        `#${String(data.id).padStart(3, "0")}`;

    pokemonHeight.textContent =
        `${data.height / 10} m`;

    pokemonWeight.textContent =
        `${data.weight / 10} kg`;

    pokemonXp.textContent =
        data.base_experience;


    // Clear old types
    pokemonTypes.innerHTML = "";


    // Add types
    data.types.forEach(function(typeData) {

        const type = document.createElement("span");

        type.classList.add("type");

        type.textContent = typeData.type.name;

        pokemonTypes.append(type);

    });
}


// Search button
searchBtn.addEventListener("click", function() {

    const pokemonName = input.value.trim().toLowerCase();

    if (pokemonName === "") {
        return;
    }

    getPokemon(pokemonName);

});


// Enter key
input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        searchBtn.click();
    }

});


// Previous Pokémon
previousBtn.addEventListener("click", function() {

    if (currentPokemonId > 1) {

        currentPokemonId--;

        getPokemon(currentPokemonId);

    }

});


// Next Pokémon
nextBtn.addEventListener("click", function() {

    currentPokemonId++;

    getPokemon(currentPokemonId);

});


// Load first Pokémon
getPokemon(currentPokemonId);