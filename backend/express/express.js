const express = require('express');
const Modelo = require('../mongo/mongoschema.js')
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.listen(8000, () =>{
    console.log("App executado");
})

app.post("/leaderboard", async(req, res)=>{
    try{
        const pontuacao = await Modelo.create(req.body);
        res.status(201).json(pontuacao);
    }
    catch{
        res.status(500).send(error.message);
    }
})

app.get("/leaderboard", async(req,res) => {
    const pontuacao = await Modelo.find({}).sort({"score": -1});
    res.send(pontuacao);
})