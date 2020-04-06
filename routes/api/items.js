const express = require('express');
const router = express.Router();

//Item model
const Item = require("../../models/items");

//@route  GET api/items
//@desc   save data in database
//@access PUBLIC

router.post("/",(req,res)=>{
    console.log(req.body);
    const newItem = new Item({
        name : req.body.name,
        imgsrc : req.body.imagesrc
    })
    newItem.save()
    .then(item => res.json(item))
    .catch(err => console.log(err))
})

//@route  GET api/items/list
//@desc   Get all Items
//@access PUBLIC
router.get('/list',(req,res)=>{
    Item.find({},(err,lists)=>{
        console.log(lists); 
        res.send(lists); 
    })
    
})


module.exports = router;