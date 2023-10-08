const complimentBtn = document.getElementById("complimentButton");
const fortuneButton = document.getElementById('fortune-button');
const submitBtn = document.getElementById('submit');
const getInspiration = document.getElementById('inspiration');
const pokemonName = document.getElementById('pokemon-name');
const pokemonList = document.getElementById('pokemon-list');
const pokemonHealth = document.getElementById('health');
const pokemonPower = document.getElementById('poke-power');


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

const displayPokemon = (event) => {
    axios.get("http://localhost:4000/api/pokemon").then(res => {

        pokemonList.innerHTML = '';
        let pokemonArray = res.data;
        for (let i = 0; i < pokemonArray.length; i++) {
            let pokemon = pokemonArray[i];
            let li = createHtmlForOnePokemon(pokemon);
            pokemonList.appendChild(li);
        }


    });
};

const createHtmlForOnePokemon = (pokemon) => {
    let li = document.createElement('li');
    li.innerHTML = `
        Name: <input type="text" id="name-${pokemon.id}" value="${pokemon.name}">
        <span>Type: ${pokemon.pokemon}</span>
        <span>Health: ${pokemon.health}</span>
        <span>Power: ${pokemon.power}</span>
    `;
    let updatePokemon = document.createElement('button');
    updatePokemon.textContent = 'Update'
    updatePokemon.addEventListener('click', () => {
        let input = document.getElementById('name-' + pokemon.id);

        let body = {
            name: input.value,
            pokemon: pokemon.pokemon,
            health: pokemon.health,
            power: pokemon.power
        }


        axios.put(`http://localhost:4000/api/pokemon/${pokemon.id}`, body).then((res) => {
            displayPokemon();
        }, body)
    })

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete'
    deleteBtn.addEventListener('click', () => {
        axios.delete(`http://localhost:4000/api/pokemon/${pokemon.id}`).then((res) => {
            displayPokemon();
        })
    });
    li.appendChild(deleteBtn);
    li.appendChild(updatePokemon);
    return li;
}

const createPokemon = (event) => {
    event.preventDefault();
    pokemonInput = document.getElementById('pokemon-selector');

    let body = {
        pokemon: pokemonInput.value,
        name: pokemonName.value,
        health: pokemonHealth.value,
        power: pokemonPower.value

    }
    axios.post("http://localhost:4000/api/pokemon/", body)
        .then(res => {
            displayPokemon();
        })
}

const getInspo = () => {
    axios.get("http://localhost:4000/api/inspiration/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
}

fortuneButton.addEventListener('click', getFortune);
complimentBtn.addEventListener('click', getCompliment);
submitBtn.addEventListener('click', createPokemon);
getInspiration.addEventListener('click', getInspo);
document.addEventListener('DOMContentLoaded', displayPokemon);

