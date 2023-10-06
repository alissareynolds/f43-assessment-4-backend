const complimentBtn = document.getElementById("complimentButton");
const fortuneButton = document.getElementById('fortune-button');
const submitBtn = document.getElementById('submit');
const getInspiration = document.getElementById('inspiration');
const pokemonName = document.getElementById('pokemon-name');
const pokemonList = document.getElementById('pokemon-list');

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

const displayPokemon= (event) => {
axios.get("http://localhost:4000/api/pokemon").then(res => {
        pokemonList.innerHTML = '';
        let pokemonArray = res.data;
        for (let i = 0; i < pokemonArray.length; i++){
            let pokemon = pokemonArray[i];

            let li = document.createElement('li')
        li.textContent = `${pokemon.id} ${pokemon.name} ${pokemon.pokemon}`; 
        pokemonList.appendChild(li);
        }

        
    });
};

const createPokemon = (event) => {
    event.preventDefault();
    pokemonInput = document.getElementById('pokemon-selector');

    let body = {
        pokemon: pokemonInput.value,
        name: pokemonName.value
       
    }
    axios.post("http://localhost:4000/api/pokemon/", body)
    .then( res => {
      
        let pElement = document.createElement('p')
        pElement.textContent = `${res.data.id} ${res.data.name} ${res.data.pokemon}`; 
        pokemonList.appendChild(pElement);
    
    
    })
}

const getInspo = () => {
    axios.get("http://localhost:4000/api/inspiration/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
}

const updatePokemon = () => {
    let body = {
        
    }
    axios.put("http://localhost:4000/api/pokemon/", body)
    .then( res => {

   })

}
fortuneButton.addEventListener('click', getFortune);
complimentBtn.addEventListener('click', getCompliment);
submitBtn.addEventListener('click', createPokemon);
getInspiration.addEventListener('click', getInspo);
document.addEventListener('DOMContentLoaded', displayPokemon);
