const express = require('express');
const router = express.Router();
const Gear = require('../models/Gear')

// Get All Items route
router.get('/', async (req, res) => {
  const gear = await Gear.find();
  res.json(gear)
})

// Create new Item
router.post('/new', async (req, res) => {
  
  const newItem = new Gear(
     req.body // What the Vue App is sending  
  ); 
  const savedItem = await newItem.save() // mongo save method
  res.json(savedItem) // respond with json to our post endpoint
});

// Getter by id
router.get('/get/:id', async (req, res) => {
  const t = await Gear.findById({ _id : req.params.id })
  res.json(t)
})

// Delete a Item by id
router.delete('/delete/:id', async (req, res) => {
  const tDelete = await Gear.findByIdAndDelete({ _id : req.params.id })
  res.json(tDelete)
})

// Update a Item by id
router.put('/update/:id', async (req, res) => {
  const tUpdate = await Gear.updateOne(
    { _id: req.params.id }, 
    { $set: req.body }
  )
  res.json(tUpdate)
})

module.exports = router