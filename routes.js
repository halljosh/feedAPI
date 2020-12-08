const express = require('express');
const feedController = require('./controller');
const router = express.Router();

// GET /api
router.get('/', (req, res) => {
    res.send('welcome to Pets API');
});

// GET /api/pets
router.get('/pets', feedController.getPet);

// GET /api/pets/id
router.get('/pets/:id', feedController.getPetById);

// GET /api/pets/name
router.get('/pets/:name', feedController.getPetByName);

module.exports = router;