const express = require("express");
const bodyParser = require('body-parser');
const PORT = 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const groceryRouter = require('./routes/grocery');
app.use('/grocery',groceryRouter);


app.listen(PORT, () => console.log(`Running on port ${PORT}`));