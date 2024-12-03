const fruits = require('./fruits');

function index() {
    return fruits;
}

function store(name) {
    fruits.push(name);
}

function update(position, name) {
    if (position >= 0 && position < fruits.length) {
        fruits[position] = name;
    }
}

function destroy(position) {
    if (position >= 0 && position < fruits.length) {
        fruits.splice(position, 1);
    }
}

module.exports = { index, store, update, destroy };