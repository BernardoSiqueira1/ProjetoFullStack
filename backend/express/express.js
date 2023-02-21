const express = require('express');
const Modelo = require('../mongo/mongoschema.js')
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.listen(8000, () =>{
    console.log("App executado");
})

app.post("/leaderboard", async(req, res)=>{ //Endpoint para salvar jogador e pontuação
    try{
        const pontuacao = await Modelo.create(req.body);
        res.status(201).json(pontuacao);
    }
    catch{
        res.status(500).send(error.message);
    }
})

app.get("/leaderboard", async(req,res) => { //Endpoint pegar os jogadores e pontuação
    const pontuacao = await Modelo.find({}).sort({"score": -1}); //Sort para mostrar a pontuação do maior para o menor.
    res.send(pontuacao);
})