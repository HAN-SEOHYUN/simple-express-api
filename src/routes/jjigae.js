const express = require('express');
const router = express.Router();

const db = require('../db');

router.get('',(req,res,next)=>{
    db.getAllJjigae((rows)=>{
        res.send(rows); 
    });
});

router.get('/:id',(req,res)=>{
    const key = 'id';

    db.getJjigaeByKey(key, req.params.id, (row)=>{
        res.send(row);
    });
});

router.post('/', (req,res)=>{
    const param = req.body;
    db.insertJjigae(param, ()=>{
        res.redirect('/jjigae');
    });
});

router.delete('/:id',(req,res)=>{
    const id = req.params.id;
    db.deleteJjigae(id, ()=>{
        res.redirect('/jjigae');
    });
});

router.put('/', (req,res) => {
    const key = 'name';
    const value = "'"+ req.body.name + "'";

    let detailResponse;
    db.getJjigaeByKey( key,  value, (row)=>{
        detailResponse = row;
        console.log('data : ' , detailResponse);
    });

    if (detailResponse == "") {
        console.log("없음");
    }

    db.updateJjigaeByName(req.body, ()=>{
        res.redirect('/jjigae');    
    });
});

module.exports = router;