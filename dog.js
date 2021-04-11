console.log('Rexas');
console.log(2 + 2);
console.log('Labas');

/*
Objekto sablonas: (class): Dog
Objekto savybes (parameters): 
    - vardas: Rexas
    - kailis: rudas
    - kojos: 4
    - uodega: ruda
    - amzius: 3
Objekto funkcionalumas (methods):
    - atsisesti
    - atsigulti
    - begti
    - loti
    - sustoti
*/

class Dog {
    constructor(vardas) {
        console.log(vardas);
    }
}

const rexas = new Dog('Rexas');
console.log(rexas);