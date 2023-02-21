//Arquivo principal para rodar DB e Express juntos.

const dotenv = require('dotenv');
const DBConnect = require('./mongo/mongoconnect.js');
require('./express/express.js')

dotenv.config({path:".env"});
DBConnect();
