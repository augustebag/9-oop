class Tekstas {
    constructor(text) {
        this.text = text;
        this.dictionary = [];
    }

    getDictionary() {
        this.dictionary = this.text.split(' ');
        console.log(this.dictionary);
    }

    firstWord() {
        console.log(this.dictionary[0]);
    }

    lastWord() {
        console.log(this.dictionary[this.dictionary.length -1]);
    }

    acronym() {
        let acr = [];
        for (const word of this.dictionary) {
            acr.push(word[0]);
        }
        return acr.join('.');
    }
}

const labas = new Tekstas('Labukas as esu krabas');

labas.getDictionary();
labas.firstWord();
labas.lastWord();
const akronimas = labas.acronym();
console.log(akronimas);
