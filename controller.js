const pets = [
    { id: 1, name: 'Toast', animal: 'dog' },
    { id: 2, name: 'Shannon', animal: 'dog'},
    { id: 3, name: 'Sir Jackal', animal: 'cat'},
    { id: 4, name: 'Atuso Toggle VonCattington', animal: 'cat'}
];

exports.getPet = (req, res) => {
    res.status(202).send(pets);
};

exports.getPetById = (req, res) => {
    const pet = pets.find(p => p.id === parseInt(req.params.id));
    if (!pet) {
        res.status(404).send('the pet with this id was not found!');
    }
    res.status(202).send(pet);
}

exports.getPetByName = (req, res) => {
    const pet = pets.find(p => p.name == (req.params.name));
    if (!pet) {
        res.status(404).send('the pet with this name was not found!');
    }
    res.status(202).send(pet);
}