const express = require('express');
const router = express.Router();

//Item model
const Item = require("../../models/items");

//@route  GET api/items
//@desc   Get all Items
//@access PUBLIC

router.post("/",(req,res)=>{
    const newItem = new Item({
        name : req.body.name
    })
    newItem.save()
    .then(item => res.json(item))
    .catch(err => console.log(err))
})

module.exports = router;