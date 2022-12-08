const express = require("express");
const groceriesRoute = require('./routes/groceries');
const marketsRoute = require('./routes/markets');

const app = express(); //give instance of application
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded());
app.use((req,res,next)=>{
    console.log(`${req.method}:${req.url}`);
    next(); 
});

// app.use(groceriesRoute);
app.use('/api/v1/groceries',groceriesRoute); //prefix the api
app.use('/api/v1/markets',marketsRoute); 
app.listen(PORT, () => console.log(`Running on port ${PORT}`));

/*app.get(
  "/groceries",
  (req, res, next) => {
    console.log("Before Handling Request");
    next();
  },
  (req, res, next) => {
    res.send(groceryList);
    next();
  },
  (req,res,next) => {
    console.log('Finish Executing Get request');
    next();  
  },
  (req, res, next) => {
    res.send(403);
  }
);*/

/*app.get("/groceries/:item",(req,res)=>{
    console.log(req.params.item);
    res.send(200); 
});*/



