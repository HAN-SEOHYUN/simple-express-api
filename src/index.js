const { response } = require('express');
const express = require('express');

const app = express(); //give instance of application
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded());

app.listen(PORT, ()=> console.log(`Running on port ${PORT}`));

const groceryList = [
{
    item: 'milk',
    quantity: 2,
},
{
    item: 'cereal',
    quantity :2,
},
{
    item: 'bread',
    quantity: 1,
},  
];

app.get('/groceries', (req, res, next)=>{
    res.send(groceryList);
});

app.post('/groceries', (req, res)=>{
    console.log(req.body);
    groceryList.push(req.body);
    res.send(201);
});