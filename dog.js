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
    - prisistatyk
    - atsisesti
    - atsigulti
    - begti
    - loti
    - sustoti
*/

class Dog {
    constructor(vardas, spalva) {
        this.name = vardas;
        this.fur = spalva;
        this.barking = false;
    }

    prisistatymas() {
        console.log(`Labas, as esu ${this.name} ir mano kailio spalva yra ${this.fur}.`);
    }

    balsas() {
        if (this.barking) {
            console.log(`${this.name}: loja...`);
        } else {
            console.log(`${this.name}: neloja...`);
        }
    }

    balsas(arLoja) {
        if (arLoja === undefined) {
            console.log(`${this.name}: ${this.barking ? ' ' : 'ne'} loja`);
            return;
        }

        if (typeof arLoja === 'boolean') {
            this.barking = arLoja;
            console.log(`${this.name}: ${this.barking ? ' ' : 'ne'} loja`);
            return
        }
    }
}

const rexas = new Dog('Rexas', 'rudas');
rexas.prisistatymas();

const spaikas = new Dog('Spike', 'baltas');
spaikas.prisistatymas();

rexas.balsas();
spaikas.balsas();
rexas.barking = true;
rexas.balsas();
rexas.balsas(false);

