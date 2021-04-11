class Matematika {
    suma(a, b) {
        return console.log(a + b);
    }

    didziausias(a, b) {
        return console.log(a > b ? a : b);
    }
}

const m = new Matematika();

m.suma(5, 6);
m.suma(5, 63);
m.didziausias(5, 63);
m.didziausias(445, 63)