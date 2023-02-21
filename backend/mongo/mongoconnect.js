const { default: mongoose } = require("mongoose");
const mongodb = require("mongoose");


const DBConnect = async() => {
    await mongodb.connect(`mongodb+srv://${process.env.usuario}:${process.env.senha}@leaderboarddb.7buufla.mongodb.net/test`,(error) => {
        if (error) {
            console.log(error);
        }
        else{
            console.log("Conectado.");
        }
    })
}

module.exports = DBConnect;