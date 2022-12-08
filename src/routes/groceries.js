const {Router} = require('express');

const router = Router();

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

//findAll
router.get("",(req, res, next) => { //remove api through prefix route
    res.send(groceryList);
}); 

//findByName
router.get(':item', (req, res)=>{
  const {item} = req.params;
  const groceryItem = groceryList.find((g)=>g.item === item);
  res.send(groceryItem);
});

//post
router.post("", (req, res) => {
  console.log(req.body);
  groceryList.push(req.body);
  res.send(201);
});

module.exports = router;