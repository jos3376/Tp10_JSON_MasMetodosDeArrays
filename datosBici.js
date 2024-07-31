const fs = require('fs');
const path = require('path');

const bicis = JSON.parse(fs.readFileSync(path.join(__dirname, 'bicicletas.json')));



module.exports = bicis