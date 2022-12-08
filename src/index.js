const express = require("express");
const bodyParser = require('body-parser');
const PORT = 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const jjigaeRouter = require('./routes/jjigae');
app.use('/jjigae',jjigaeRouter);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));