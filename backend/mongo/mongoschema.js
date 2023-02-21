const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    initials: {
        type:String,
        required:true
    },
    score: {
        type:Number,
        required:true
    }
})

const Modelo = mongoose.model("Placar", Schema);
module.exports = Modelo;