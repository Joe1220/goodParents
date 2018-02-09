const express = require('express');
const routes = require('./routes/routes');

const app = express()

app.get('/idol', router);

app.listen(3001, () => console.log('Example app listening on port 3001'))