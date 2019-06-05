const fs = require('fs');
const getResults = require('../index');

(async () => {
    let results = await getResults();
    let jsonString = JSON.stringify(results);
    fs.writeFileSync('../output.json', jsonString, 'utf-8');
})();
