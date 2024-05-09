const kopiNigga = require('./state');

const makeCoffee = (type, milligrams) => {
    if (kopiNigga[type] < milligrams) {
        console.log('Kopi berhasil dibuat!');
    } else {
        console.log("Habis Nigga!");
    }
}

makeCoffee('arabica', 80);
console.log(kopiNigga);