const express = require('express');
const feedController = require('./controller');
const router = express.Router();

// GET /api
router.get('/', (req, res) => {
    res.send('welcome to Pets API');
});

// GET /api/pets
router.get('/pets', feedController.getPets);

// GET /api/pets/{id or name}
router.get('/pets/:param', feedController.getPet);

module.exports = router;