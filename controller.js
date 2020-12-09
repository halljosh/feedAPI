const pets = [
    { id: 1, name: 'Toast', animal: 'dog' },
    { id: 2, name: 'Shannon', animal: 'dog'},
    { id: 3, name: 'Sir Jackal', animal: 'cat'},
    { id: 4, name: 'Atuso Toggle VonCattington', animal: 'cat'}
];

exports.getPets = (req, res) => {
    res.status(202).send(pets);
};

exports.getPet = (req, res) => {
    if (!isNaN(req.params.param)) { // evaluates searches by ID
        const pet = pets.find(p => p.id === parseInt(req.params.param));
        if (!pet) {
            const weirdPet = pets.find(p => p.name === parseInt(req.params.param));
            if (!weirdPet) {
                res.status(404).send('the pet with this id was not found!');
            }
        }
        res.status(202).send(pet);
    }
    else { // evaluates searches by name
        const namedPet = pets.find(p => p.name.toLowerCase().replace(/\s+/g, '') == (req.params.param).toLowerCase());
        if (!namedPet) {
            res.status(404).send('the pet with this name was not found!');
        }
        res.status(202).send(namedPet);
    }
};


