const { response } = require("express");
const express = require("express");

const app = express(); //give instance of application
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded());
app.use((req,res,next)=>{
    console.log(`${req.method}:${req.url}`);
    next(); 
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));

const groceryList = [
  {
    item: "milk",
    quantity: 2,
  },
  {
    item: "cereal",
    quantity: 2,
  },
  {
    item: "bread",
    quantity: 1,
  },
];

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

app.get("/groceries",(req, res, next) => {
    res.send(groceryList);
}); 

//findByName
app.get('/groceries/:item', (req, res)=>{
  const {item} = req.params;
  const groceryItem = groceryList.find((g)=>g.item === item);
  res.send(groceryItem);
});

app.post("/groceries", (req, res) => {
  console.log(req.body);
  groceryList.push(req.body);
  res.send(201);
});

