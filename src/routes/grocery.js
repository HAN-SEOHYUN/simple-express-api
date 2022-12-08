const express = require('express');
const router = express.Router();

const db = require('./../db');

router.get('',(req,res,next)=>{
    db.getAllGrocery((rows)=>{
        res.send(rows);
    });
});

router.get('/:item',(req,res)=>{
    const item = req.params.item;
    db.getGroceryById(item, (row)=>{
        res.send(row);
    });
});

router.post('/', (req,res,next)=>{
    let param = JSON.parse(JSON.stringify(req.body));
    console.log(param);
    db.insertGrocery(param, ()=>{
        res.redirect('/grocery');
    });
});

router.delete('/:id',(req,res)=>{
    let id = req.params.id;
    db.deleteGrocery(id, ()=>{
        res.redirect('/grocery');
    });
});


module.exports = router;