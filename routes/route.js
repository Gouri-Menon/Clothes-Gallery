const express= require('express');
const router=express.Router();
const Store=require('../models/model');
 const bodyParser= require('body-parser');
 const store= require('../models/model');

 router.use(bodyParser.json());
 router.use(express.urlencoded({extended: true}));



//GET 
router.get('/stores', async(req,res) =>{
    try{
        const stores = await Store.find().sort({date: -1});
        res.json(stores);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

//POST 
router.post('/stores',async (req,res) =>{
    const store = new Store({           
        product: req.body.product,
        imgUrl: req.body.imgUrl,
        description: req.body.description
    });

    try{
        const newStore = await store.save();   
        res.status(201).json(newStore);
    }catch(error){
        res.status(400).json({message: error.message});
    }
});

//PUT 
router.put('/stores/:id',async(req,res) =>{
    try{
        const updatedStore = await Store.findByIdAndUpdate(req.params.id, req.body, {new: true });
        res.json (updatedStore)
    }catch(error){
        res.status(400).json({message:error.message});
    }
});

//DELETE endpoint to delete an existing blog by ID
router.delete('/stores/:id',async (req,res) =>{
    try{
        await Store.findByIdAndDelete (req.params.id);
        res.json({ message: 'Item deleted'});
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

module.exports= router;