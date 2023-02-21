const dotenv = require('dotenv');
const DBConnect = require('./mongo/mongoconnect.js');
require('./express/express.js')

dotenv.config({path:".env"});
DBConnect();
