var express = require('express');

const Talent = require('../model/talent');

var router = express.Router();

router.get("/", async function(req, res, next){
    try {
        const talents = await Talent.find();
        res.status(200).json(talents);
        //res.end();
    }
    catch(err){
        res.json({'error': "Couldn't fetch data"});
    }
});

router.get("/:id", async function(req, res, next){
    const id = req.params.id;
    //console.log(typeof(id));
    try {
        const talent = await Talent.findOne({_id: id});
        res.status(200).json(talent);
        //res.end();
    }
    catch(err){
        console.log(err);
        res.json({
            'error': "Couldn't fetch the talent with the specified ID",
            'message': err
        });
    }
});

router.post('/', async () => {
    const talent = req.params.body;
    //console.log(typeof(id));
    try {
       // const talent = await Talent.findOne({_id: id});
       const newTalent = new Talent({

       });
       const savedTalent = await newTalent.save();
        res.json(talent);
        //res.end();
    }
    catch(err){
        console.log(err);
        res.json({
            'error': "Couldn't fetch the talent with the specified ID",
            'message': err
        });
    }
})
module.exports = router;