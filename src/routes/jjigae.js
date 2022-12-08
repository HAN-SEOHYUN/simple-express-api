const express = require('express');
const router = express.Router();

const db = require('../db');

router.get('',(req,res,next)=>{
    db.getAllJjigae((rows)=>{
        res.send(rows);
    });
});

router.get('/:name',(req,res)=>{ // 라우터의 매개변수
    //예를 들어 /:id/:name 경로가 있으면 ":id"속성과 ":name"속성을 req.params.id, req.params.name으로 사용할 수 있다.
    const item = req.params.item;
    db.getJjigaeById(item, (row)=>{
        res.send(row);
    });
});

router.post('/', (req,res,next)=>{
    const param = JSON.parse(JSON.stringify(req.body));
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


module.exports = router;