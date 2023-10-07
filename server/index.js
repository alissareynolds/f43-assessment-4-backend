const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

const { getFortune } = require('./controller')

const { createPokemon } = require('./controller')

const { getInspiration } = require('./controller')

const { deletePokemon } = require('./controller')

const { getPokemon } = require('./controller')

const { updatePokemon } = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.post("/api/pokemon", createPokemon);

app.get("/api/pokemon", getPokemon);

app.get("/api/inspiration", getInspiration);

app.delete("/api/pokemon/:id", deletePokemon);

app.put("/api/pokemon", updatePokemon);

app.listen(4000, () => console.log("Server running on 4000"));
