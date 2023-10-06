const pokemonList = [];
let id = 1; 

module.exports = {
 

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }, 
    getFortune: (req, res) => {
        const fortunes = ['A new perspective will come with the new year', 'All the effort you are making will ultimately pay off', 'An inch of time is an inch of gold', 'Believe in yourself and others will too', 'Depart not from the path which fate has you assigned', 'Fortune Not Found: Abort, Retry, Ignore?', 'Happiness will bring you good luck', 'Happy life is just in front of you']

       let index = Math.floor(Math.random() * fortunes.length);
       let randomFortune = fortunes[index];

       res.status(200).send(randomFortune);
    }, 
    getPokemon: (req, res) => {
        
        res.status(200).send(pokemonList);

    },
    getInspiration: (req, res) => {
        const inspiration = ["Choose a job you love, and you will never have to work a day in your life", "Whether you think you can or you think you can't, you're right", "Find out what you like doing best, and get someone to pay you for doing it", "Motivation is what gets you started. Habit is what keeps you going", "Some people dream of success while others wake up and work", "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will", "I am not a product of my circumstances. I am a product of my decisions", "No one succeeds without effort… Those who succeed owe their success to perseverance", "I have not failed. I've just found 10,000 ways that won't work", "Opportunities don't happen, you create them."];

        let randomIndex = Math.floor(Math.random() * inspiration.length);
        let randomInspo = inspiration[randomIndex];

        res.status(200).send(randomInspo);
    },
    createPokemon: (req, res) => {
        let pokemon = req.body;
        pokemon.id = id;
        pokemonList.push(pokemon);
        id++;
        res.status(201).send(pokemon);
    }

}